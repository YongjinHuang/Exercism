//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  let v = x*x+y*y;
  if (v > 100) {
    return 0;
  } else if (v > 25) {
    return 1;
  } else if (v > 1) {
    return 5;
  } else {
    return 10;
  }
};
