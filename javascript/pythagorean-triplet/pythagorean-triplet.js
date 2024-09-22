//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor, maxFactor, sum }) {
  const res = [];
  for (let a = minFactor ?? 1; 3 * a < sum; a++) {
    for (
      let b = !maxFactor ? a + 1 : Math.max(sum - a - maxFactor, a + 1);
      2 * b < sum - a;
      b++
    ) {
      let c = sum - a - b;
      if (a * a + b * b === c * c) {
        res.push(new Triplet(a, b, c));
      }
    }
  }
  return res;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
