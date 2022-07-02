export const warn = (scope: string, message?: string): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`[${scope}] ${message}`)
  }
}
