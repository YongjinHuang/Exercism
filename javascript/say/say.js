//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SINGLE_NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const TEN_TO_TWENTY = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];
const TWENTY_TO_NINTY_NINE = [
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

export const say = (n) => {
  if (n < 0 || n > 999999999999)
    throw new Error("Number must be between 0 and 999,999,999,999.");
  let res = "";
  if (n >= 1e9) {
    res += `${say(Math.floor(n / 1e9))} billion`;
    n %= 1e9;
    if (n > 0) res += " ";
  }
  if (n >= 1e6) {
    res += `${say(Math.floor(n / 1e6))} million`;
    n %= 1e6;
    if (n > 0) res += " ";
  }
  if (n >= 1e3) {
    res += `${say(Math.floor(n / 1e3))} thousand`;
    n %= 1e3;
    if (n > 0) res += " ";
  }
  if (n >= 1e2) {
    res += `${say(Math.floor(n / 1e2))} hundred`;
    n %= 1e2;
    if (n > 0) res += " ";
  }
  if (n > 20) {
    res += TWENTY_TO_NINTY_NINE[Math.floor(n / 10) - 1];
    if (n % 10 !== 0) res += "-";
    n %= 10;
  }
  if (n >= 10) {
    res += TEN_TO_TWENTY[n - 10];
    return res;
  }
  if (res === "" || n > 0) res += SINGLE_NUMBER_WORDS[n];
  return res;
};
