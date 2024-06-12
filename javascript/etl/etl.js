//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => Object.entries(old).reduce((accu, [key, value]) => {
  value.map(c => c.toLowerCase()).forEach(c => {
    accu[c] = Number(key);
  });
  return accu;
}, {});
