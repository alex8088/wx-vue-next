/* eslint-disable @typescript-eslint/no-explicit-any */

export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null

export const isNumber = (val: any): val is number => typeof val === 'number'
