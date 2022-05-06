/**
 * Capitalizes the first character of a given string.
 * @param val The string to capitalize.
 * @returns The given string with the first letter capitalized.
 */
export function capitalize(val: string): string {
  return val.charAt(0).toUpperCase() + val.substring(1)
}

/**
 * Returns the given number as an ordinal number (1st, 2nd, etc).
 * @param val The number to return as an ordinal string.
 * @returns The number as an ordinal.
 */
export function asOrdinal(val: number): string {
  const asString = val.toString()
  if (['1'].includes(asString.charAt(asString.length - 1))) return val + 'st'
  if (['2'].includes(asString.charAt(asString.length - 1))) return val + 'nd'
  if (['3'].includes(asString.charAt(asString.length - 1))) return val + 'rd'
  return val + 'th'
}
