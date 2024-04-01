//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (baseValues, level) => {
  const valueSet = new Set();
  for (let base of baseValues) {
    if (base <= 0) {
      continue;
    }
    for (let i = base; i < level; i += base) {
      valueSet.add(i);
    }
  }
  return Array.from(valueSet).reduce((acc, value) => acc+value, 0);
};
