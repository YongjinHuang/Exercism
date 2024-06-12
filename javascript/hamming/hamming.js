//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {string} strand1 
 * @param {string} strand2 
 */
export const compute = (strand1, strand2) => {
  if (strand1.length !== strand2.length) {
    throw new Error('strands must be of equal length');
  }
  return [...strand1].filter((c, i) => c !== strand2[i]).length;
};
