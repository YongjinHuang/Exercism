// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const calc = (arr) => arr.reduce((acc, cur) => acc * 10 + cur);
  return calc(array1) + calc(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let [reverseValue, tmp] = [0, value];
  while (tmp > 0) {
    reverseValue = reverseValue * 10 + (tmp % 10);
    tmp = Math.floor(tmp / 10);
  }
  return value === reverseValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }
  return Number.isNaN(Number(input)) || Number(input) === 0 ? 'Must be a number besides 0' : '';
}
