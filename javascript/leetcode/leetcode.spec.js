import { isSubstringPresent, sumOfTheDigitsOfHarshadNumber, numberOfSpecialChars } from "./leetcode";

describe('leetcode-3099', () => {
    test('Default test cases', () => {
        expect(sumOfTheDigitsOfHarshadNumber(18)).toEqual(9);
        expect(sumOfTheDigitsOfHarshadNumber(23)).toEqual(-1);
    });
});

describe('leetcode-3083', () => {
    test('Default test cases', () => {
        expect(isSubstringPresent("leetcode")).toBeTruthy();
        expect(isSubstringPresent("abcba")).toBeTruthy();
        expect(isSubstringPresent("abcd")).toBeFalsy();
    });
});

describe('leetcode-3120', () => {
    test('Default test cases', () => {
        expect(numberOfSpecialChars("aaAbcBC")).toEqual(3);
        expect(numberOfSpecialChars("abc")).toEqual(0);
        expect(numberOfSpecialChars("abBCab")).toEqual(1);
    });
});