//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {number} num 
 * @returns 
 */
export const convert = (num) => {
  let res = '';
  res += num % 3 === 0 ? 'Pling' : '';
  res += num % 5 === 0 ? 'Plang' : '';
  res += num % 7 === 0 ? 'Plong' : '';
  return res || num.toString();
};