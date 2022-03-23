export function getEnumKeyByEnumValue<T extends { [index: string]: string }>(
  enm: T,
  enumValue: string
): keyof T | null {
  const keys = Object.keys(enm).filter((x) => enm[x] === enumValue)
  return keys.length > 0 ? keys[0] : null
}
