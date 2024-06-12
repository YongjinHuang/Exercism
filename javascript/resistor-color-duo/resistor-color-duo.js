//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {string[]} arr 
 */
export const decodedValue = arr => arr.slice(0, 2).reduce((accu, color) => accu*10+COLORS.indexOf(color), 0);

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
