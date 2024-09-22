//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ARR = [
  "house",
  "malt",
  "rat",
  "cat",
  "dog",
  "cow with the crumpled horn",
  "maiden all forlorn",
  "man all tattered and torn",
  "priest all shaven and shorn",
  "rooster that crowed in the morn",
  "farmer sowing his corn",
  "horse and the hound and the horn",
];

const DECORATOR = [
  "",
  "that lay in",
  "that ate",
  "that killed",
  "that worried",
  "that tossed",
  "that milked",
  "that kissed",
  "that married",
  "that woke",
  "that kept",
  "that belonged to",
];

export class House {
  static verse(num) {
    if (num <= 1) return ["This is the house that Jack built."];
    const lyrics = House.verse(num - 1);
    lyrics[0] = lyrics[0].replace("This is", DECORATOR[num - 1]);
    lyrics.unshift(`This is the ${ARR[num - 1]}`);
    return lyrics;
  }

  static verses(start, end) {
    const res = [];
    for (let i = start; i <= end; i++) {
      res.push(...House.verse(i));
      if (i !== end) res.push("");
    }
    return res;
  }
}
