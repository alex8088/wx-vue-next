import type { PickerOptions } from '../picker/types'

const getHours = (
  start = 0,
  end = 23,
  formatter: (type: 'hour' | 'minute', value: number) => string
): PickerOptions => {
  const hours: PickerOptions = []
  for (let i = start; i <= end; i++) {
    hours.push({
      label: formatter('hour', i),
      value: i
    })
  }
  return hours
}

const getMins = (
  step: number,
  formatter: (type: 'hour' | 'minute', value: number) => string
): PickerOptions => {
  const mins: PickerOptions = []
  for (let i = 0; i < 60; i += step) {
    mins.push({
      label: formatter('minute', i),
      value: i
    })
  }
  return mins
}

export { getHours, getMins }
