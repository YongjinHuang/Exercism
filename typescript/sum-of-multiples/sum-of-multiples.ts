export function sum(baseValues: number[], level: number): number {
  const valueSet: Set<number> = new Set();
  for (const baseValue of baseValues) {
    if (baseValue <= 0) {
      continue;
    }
    for (let i = baseValue; i < level; i += baseValue) {
      valueSet.add(i);
    }
  }
  return Array.from(valueSet).reduce((acc, v) => acc + v, 0)
}
