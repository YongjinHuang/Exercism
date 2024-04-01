export function encode(str: string): string {
  return str.replace(/(.)\1*/g, (match: string, char: string) => match.length > 1 ? (match.length.toString() + char) : char )
  
}

export function decode(str: string): string {
  return str.replace(/(\d+)(\D)/g, (_, length: number, char: string) => char.repeat(length));
}
