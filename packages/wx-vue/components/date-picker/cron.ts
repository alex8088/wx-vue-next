/**
 * @see https://github.com/Tencent/weui.js/blob/master/src/picker/cron.js
 */
const regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g
const constraints = [
  [1, 31],
  [1, 12],
  [0, 6]
]

class Schedule {
  private dayOfMonth: number[]
  private months: number[]
  private dayOfWeek: number[]
  private end: Date
  private pointer: Date

  constructor(fields: number[][], start: Date, end: Date) {
    this.dayOfMonth = fields[0]
    this.months = fields[1]
    this.dayOfWeek = fields[2]
    this.end = end
    this.pointer = start
  }

  private findNext(): Date {
    let next

    while (this.end.getTime() - this.pointer.getTime() >= 0) {
      const month = this.pointer.getMonth()
      if (this.months.indexOf(month + 1) === -1) {
        this.pointer.setMonth(month + 1)
        this.pointer.setDate(1)
        continue
      }

      const date = this.pointer.getDate()
      if (this.dayOfMonth.indexOf(date) === -1) {
        this.pointer.setDate(date + 1)
        continue
      }

      const day = this.pointer.getDay()
      if (this.dayOfWeek.indexOf(day) === -1) {
        this.pointer.setDate(date + 1)
        continue
      }

      next = new Date(this.pointer)
      break
    }

    return next
  }

  next(): { value?: Date; done: boolean } {
    const value = this.findNext()
    this.pointer.setDate(this.pointer.getDate() + 1)
    return {
      value: value,
      done: this.end.getTime() - this.pointer.getTime() < 0
    }
  }
}

const parseField = (field: string, constraints: number[]): number[] => {
  const low = constraints[0]
  const high = constraints[1]

  const result: number[] = []
  let pointer: number

  // * low to high
  field = field.replace(/\*/g, low + '-' + high)

  // e.g. 1,2,5-9
  const fields = field.split(',')
  for (let i = 0, len = fields.length; i < len; i++) {
    const f = fields[i]
    if (f.match(regex)) {
      f.replace(regex, (_, lower, upper, step) => {
        // Positive integer higher than constraints[0]
        lower = Math.min(Math.max(low, ~~Math.abs(lower)), high)

        // Positive integer lower than constraints[1]
        upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower

        // ref to `cron-parser`
        step = parseInt(step) || 1

        // Count from the lower barrier to the upper
        pointer = lower

        do {
          result.push(pointer)
          pointer += step
        } while (pointer <= upper)

        return ''
      })
    }
  }

  return result
}

const parse = (expr: string, start: Date, end: Date): Schedule => {
  const atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/)
  const fields: number[][] = []
  atoms.forEach((atom, index) => {
    const constraint = constraints[index]
    fields.push(parseField(atom, constraint))
  })
  return new Schedule(fields, start, end)
}

export default {
  parse
}
