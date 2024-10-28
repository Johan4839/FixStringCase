export function countUppercase(input: string): number {
  return [...input].filter(char => char === char.toUpperCase()).length;
}

export function countLowercase(input: string): number {
  return 0;
}