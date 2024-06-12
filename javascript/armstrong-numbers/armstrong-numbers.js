//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {number} num 
 */
export const isArmstrongNumber = (num) => {
  const digits = num.toString();
  return num === Array.from(digits).reduce((accu, digit) => accu + Math.pow(digit, digits.length), 0);
};
