// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  // const juiceTimes = {
  //   'Pure Strawberry Joy': 0.5,
  //   'Energizer': 1.5,
  //   'Green Garden': 1.5,
  //   'Tropical Island': 3,
  //   'All or Nothing': 5,
  // }
  // return juiceTimes[name] || 2.5;
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let idx = 0;
  while (idx < limes.length && wedgesNeeded > 0) {
    wedgesNeeded -= limeWedges(limes[idx]);
    idx++;
  }
  return idx;
}

function limeWedges(lime) {
  switch (lime) {
    case 'small':
      return 6;
    case 'large':
      return 8;
    default:
      return 10;
  }
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    const order = orders.shift();
    if (order) {
      timeLeft -= timeToMixJuice(order);
    }
  }
  return orders;
}
