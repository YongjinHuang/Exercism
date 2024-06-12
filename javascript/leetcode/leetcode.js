// @ts-check

/**
 * leetcode-3099
 * @param {number} x
 * @return {number}
 */
export var sumOfTheDigitsOfHarshadNumber = function(x) {
  const sum = Array.from(x.toString()).map(Number).reduce((acc, cur) => acc+cur, 0);
  return x % sum === 0 ? sum : -1;
};


/**
 * @param {string} s
 * @return {boolean}
 */
export var isSubstringPresent = function(s) {
    const forwardStrs = new Set();
    for (let idx = 0; idx+1 < s.length; idx++) {
        forwardStrs.add(s.slice(idx, idx+2));
    }
    const reverseS = s.split('').reverse().join('');
    return [...forwardStrs].some(x => reverseS.includes(x));
};

/**
 * @param {string} word
 * @return {number}
 */
export var numberOfSpecialChars = function(word) {
  return [...new Set(word.toLowerCase())].filter(char => word.includes(char) && word.includes(char.toUpperCase())).length;
};