//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {number} num 
 */
export const steps = (num) => {
  if (num <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  let step = 0;
  while (num !== 1) {
    step++;
    if (num % 2 === 0)  {
      num /= 2;
    } else {
      num = num*3+1;
    }
  }
  return step;
};
