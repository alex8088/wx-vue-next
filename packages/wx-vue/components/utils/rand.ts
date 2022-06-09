export const uid = (): string => {
  return Math.random().toString(36).substring(3, 8)
}

export const num = (): number => {
  return Math.floor(Math.random() * 1000)
}
