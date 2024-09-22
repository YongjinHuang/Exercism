//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const re = /^\d-?\d{3}-?\d{5}-?[\d|X]$/;
  if (!re.test(isbn)) {
    return false;
  }
  let [res, factor] = [0, 10];
  for (const c of isbn) {
    if (/\d/.test(c)) {
      res += Number(c) * factor;
      factor--;
    } else if (c === "X") {
      res += 10;
    }
  }
  return res % 11 === 0;
};
