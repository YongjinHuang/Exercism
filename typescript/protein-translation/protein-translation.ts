export function translate(rna: string): string[] {
  const res: string[] = [];
  if (!rna) {
    return res;
  }
  const windowSize = 3;
  for (let i = 0; i < rna.length; i += windowSize) {
    let substring = rna.substring(i, i + windowSize);
    if (!(substring in MAPPING)) {
      throw new Error("Invalid codon");
    }
    if (!MAPPING[substring]) {
      break;
    }
    res.push(MAPPING[substring]);
  }
  return res;
}

const MAPPING: { [key: string]: string } = {
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
};