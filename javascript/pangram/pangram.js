//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {string} sequence 
 */
export const isPangram = (sequence) => new Set(
  [...sequence]
    .map(c => c.toLowerCase())
    .filter(c => c >= 'a' && c <= 'z')
).size === 26;
