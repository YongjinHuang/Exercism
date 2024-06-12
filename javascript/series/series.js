//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series.length === 0) {
      throw new Error('series cannot be empty');
    }
    this.digits = [...series].map(Number);
  }

  slices(sliceLength) {
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }
    if (sliceLength > this.digits.length) {
      throw new Error('slice length cannot be greater than series length');
    }
    let res = [];
    for (let i = sliceLength; i <= this.digits.length; i++) {
      res.push(this.digits.slice(i-sliceLength, i));
    }
    return res;
  }
}
