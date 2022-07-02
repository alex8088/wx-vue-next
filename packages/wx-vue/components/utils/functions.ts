export const noop = (): void => {}
export const timestamp = (): number => +Date.now()
export const castArray = <T>(val?: T | T[]): T[] =>
  val !== undefined && val !== null ? (Array.isArray(val) ? val : [val]) : []
