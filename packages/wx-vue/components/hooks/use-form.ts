import type { Ref, ComputedRef, InjectionKey } from 'vue'
import { ref, computed, provide, inject, onMounted, onUnmounted } from 'vue'
import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError
} from 'async-validator'
import Schema from 'async-validator'
import { warn, castArray, type Arrayable } from '../utils'

export type FormValidateTrigger = 'blur' | 'input' | 'change'

export interface FormFieldRule extends RuleItem {
  trigger?: Arrayable<FormValidateTrigger>
}

export type FormRules = Partial<Record<string, Arrayable<FormFieldRule>>>

export type FormField = {
  name?: string
  validate: (
    trigger?: FormValidateTrigger,
    callback?: FormValidateCallback
  ) => Promise<FormValidateReturn>
  clearValidate: () => void
}

export type FormValidator = {
  validatable: ComputedRef<boolean>
  validate: (callback?: FormValidateCallback) => Promise<boolean>
  validateFields: (
    names?: Arrayable<string>,
    callback?: FormValidateCallback
  ) => Promise<boolean>
  clearValidate: (names?: Arrayable<string>) => void
}

export type FormFieldModel = {
  validateMessage: Ref<string>
  rules: ComputedRef<FormFieldRule[]>
  validate: (
    trigger?: FormValidateTrigger,
    callback?: FormValidateCallback
  ) => Promise<FormValidateReturn>
  clearValidate: () => void
}

export type FormValidateCallback = (
  valid: boolean,
  fieldsError?: ValidateFieldsError
) => void

export type FormValidateReturn = {
  valid: boolean
  fieldsError?: ValidateFieldsError
}

export type FormValidatorContent = {
  model?: Record<string, unknown>
  rules?: FormRules
  addField: (field: FormField) => void
  removeField: (field: FormField) => void
}

export const formValidatorContentKey: InjectionKey<FormValidatorContent> =
  Symbol('formValidatorContentKey')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const get = <T = any>(obj: Record<string, any>, path: string): T => {
  const keys: string[] = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  return keys.reduce((o, k) => (o || {})[k], obj) as T
}

export const useFormValidator = (
  model?: Record<string, unknown>,
  rules?: FormRules
): FormValidator => {
  const validatable = computed<boolean>(() => {
    const hasModel = !!model
    if (!hasModel) {
      warn('WxForm', `model property is required`)
    }
    return hasModel
  })

  const formFields: FormField[] = []
  const formValidatorContent: FormValidatorContent = {
    model,
    rules,
    addField: (field) => {
      formFields.push(field)
    },
    removeField: (field) => {
      formFields.splice(formFields.indexOf(field), 1)
    }
  }

  const filterFormFields = (names?: Arrayable<string>): FormField[] => {
    const fields: FormField[] = formFields
    const _names = castArray(names)
    if (_names.length > 0) {
      fields.filter((field) => field.name && _names.includes(field.name))
    }
    return fields
  }

  const validate = async (callback?: FormValidateCallback): Promise<boolean> =>
    validateFields([], callback)

  const validateFields = async (
    names?: Arrayable<string>,
    callback?: FormValidateCallback
  ): Promise<boolean> => {
    if (!validatable.value) {
      return false
    }

    const formFields: FormField[] = filterFormFields(names)

    if (formFields.length === 0) {
      return true
    }

    const validateTasks: Promise<FormValidateReturn>[] = []

    formFields.forEach((field) => {
      if (field.name) validateTasks.push(field.validate())
    })

    const results = await Promise.all(validateTasks)

    const errorFields = results.filter((result) => !result.valid)

    let fieldsError: ValidateFieldsError = {}

    errorFields.forEach((field) => {
      fieldsError = {
        ...fieldsError,
        ...field.fieldsError
      }
    })

    const valid = errorFields.length === 0

    callback?.(valid, fieldsError)

    return valid
  }

  const clearValidate = (names?: Arrayable<string>): void => {
    filterFormFields(names).forEach((field) => field.clearValidate())
  }

  provide(formValidatorContentKey, formValidatorContent)

  return {
    validatable,
    validate,
    validateFields,
    clearValidate
  }
}

export const useFormField = (
  name?: string,
  rules?: Arrayable<FormFieldRule>
): FormFieldModel => {
  const validateMessage = ref<string>('')

  const formValidator = inject(formValidatorContentKey)

  const _modelValue = computed(() => {
    const model = formValidator?.model
    if (!model || !name) {
      return
    }

    return get(model, name)
  })

  const _rules = computed<FormFieldRule[]>(() => {
    const fieldRules = castArray<FormFieldRule>(rules)

    const formRules = formValidator?.rules

    if (formRules && name) {
      const _rules = get<Arrayable<FormFieldRule>>(formRules, name)

      if (_rules) {
        fieldRules.push(...castArray<FormFieldRule>(_rules))
      }
    }

    return fieldRules
  })

  const getActiveRules = (trigger?: FormValidateTrigger): RuleItem[] => {
    const rules = _rules.value

    return rules
      .filter((rule) => {
        if (!rule.trigger || !trigger) {
          return true
        }
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger)
        } else {
          return rule.trigger === trigger
        }
      })
      .map((rule) => rule as RuleItem)
  }

  const doValidate = async (
    rules: RuleItem[]
  ): Promise<{
    valid: boolean
    errors?: ValidateError[]
    fieldsError?: ValidateFieldsError
  }> => {
    const modelName = name!
    const validator = new Schema({ [modelName]: rules })
    return new Promise((resolve) => {
      validator
        .validate({ [modelName]: _modelValue.value }, { firstFields: true })
        .then(() => {
          resolve({ valid: true })
        })
        .catch(({ errors, fields }) => {
          resolve({ valid: false, errors, fieldsError: fields })
        })
    })
  }

  const validate = async (
    trigger?: FormValidateTrigger,
    callback?: FormValidateCallback
  ): Promise<FormValidateReturn> => {
    const rules = getActiveRules(trigger)

    if (!name || rules.length === 0) {
      callback?.(true)
      return { valid: true }
    }

    const result = await doValidate(rules)

    if (!result.valid) {
      validateMessage.value = result.errors![0]?.message || ''
    }

    callback?.(result.valid, result.fieldsError)
    return { valid: result.valid, fieldsError: result.fieldsError }
  }

  const clearValidate = (): void => {
    validateMessage.value = ''
  }

  const formField: FormField = {
    name,
    validate,
    clearValidate
  }

  onMounted(() => {
    if (name) {
      formValidator?.addField(formField)
    }
  })

  onUnmounted(() => {
    formValidator?.removeField(formField)
  })

  return {
    validateMessage,
    rules: _rules,
    validate,
    clearValidate
  }
}
