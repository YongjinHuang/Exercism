//
// This is only a SKELETON file for the 'Bottle Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const map = {
  10: 'Ten',
  9: 'Nine',
  8: 'Eight',
  7: 'Seven',
  6: 'Six',
  5: 'Five',
  4: 'Four',
  3: 'Three',
  2: 'Two',
  1: 'One',
  0: 'No',
};

const tpl = (count) => {
  const firstLine = `${map[count]} green ${count !== 1 ? "bottles" : "bottle"} hanging on the wall,`;
  return [firstLine, firstLine,
    `And if one green bottle should accidentally fall,`,
    `There'll be ${map[count - 1].toLowerCase()} green ${count !== 2 ? "bottles" : "bottle"} hanging on the wall.`]
}

export const recite = (initialBottlesCount, takeDownCount) => {
  const song = [];
  for (let i = 0; i < takeDownCount; i++) {
    song.push(...tpl(initialBottlesCount - i));
    if (i !== takeDownCount - 1) {
      song.push("");
    }
  }
  return song;
};