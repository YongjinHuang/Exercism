//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {number} num 
 */
export const classify = (num) => {
  if (num < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  if (num === 1) {
    return 'deficient';
  }
  let sum = 1;
  for (let i = 2; i*i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i*i !== num) {
        sum += (num/i);
      }
    }
  }
  return sum === num ? 'perfect' : sum > num ? 'abundant' : 'deficient';
};
