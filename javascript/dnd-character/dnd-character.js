//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3')
  }
  if (score > 18) {
    throw new Error('Ability scores can be at most 18')
  }
  return Math.floor((score - 10) / 2)
};

function getRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export class Character {
  #abilities = {
    strength: null,
    dexterity: null,
    constitution: null,
    intelligence: null,
    wisdom: null,
    charisma: null,
    hitpoints: null,
  }
  getAbility(ability) {
    if (!this.#abilities[ability]) {
      this.#abilities[ability] = Character.rollAbility();
    }
    return this.#abilities[ability];
  }
  static rollAbility() {
    let rolls = Array.from({ length: 4 }, () => getRandomInteger(1, 6));
    return rolls.sort().slice(1).reduce((a, b) => a + b, 0);
  }

  get strength() {
    return this.getAbility('strength');
  }

  get dexterity() {
    return this.getAbility('dexterity');
  }

  get constitution() {
    return this.getAbility('constitution');
  }

  get intelligence() {
    return this.getAbility('intelligence');
  }

  get wisdom() {
    return this.getAbility('wisdom');
  }

  get charisma() {
    return this.getAbility('charisma');
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
