//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const MAPPING = {
  "AUG": "Methionine",
  "UUU": "Phenylalanine",
  "UUC": "Phenylalanine",
  "UUA": "Leucine",
  "UUG": "Leucine",
  "UCU": "Serine",
  "UCC": "Serine",
  "UCA": "Serine",
  "UCG": "Serine",
  "UAU": "Tyrosine",
  "UAC": "Tyrosine",
  "UGU": "Cysteine",
  "UGC": "Cysteine",
  "UGG": "Tryptophan",
  'UAA': '',
  'UAG': '',
  'UGA': '',
}

export const translate = (rna) => {
  let res = [];
  if (!rna) {
    return res;
  }
  const windowSize = 3;
  for (let i = 0; i < rna.length; i += windowSize) {
    let substring = rna.substring(i, i+windowSize);
    if (!(substring in MAPPING)) {
      throw new Error('Invalid codon');
    }
    let value = MAPPING[substring];
    if (!value) {
      break;
    }
    res.push(value);
  }
  return res;
};
