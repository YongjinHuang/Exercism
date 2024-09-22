//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (str, wl) => {
  if (wl < 0) {
    throw new Error("Span must be greater than zero");
  }
  if (str.length < wl) {
    throw new Error("Span must be smaller than string length");
  }
  if (![...str].every((c) => c >= "0" && c <= "9")) {
    throw new Error("Digits input must only contain digits");
  }
  let res = 0;
  for (let i = 0; i <= str.length - wl; i++) {
    res = Math.max(
      res,
      [...str.slice(i, i + wl)]
        .map(Number)
        .reduce((accu, item) => accu * item, 1)
    );
  }
  return res;
};
