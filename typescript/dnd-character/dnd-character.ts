function getRandomScore(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const ROLL_COUNT = 4;

export class DnDCharacter {
  #abilities: { [key: string]: number | null } = {
    strength: null,
    dexterity: null,
    constitution: null,
    intelligence: null,
    wisdom: null,
    charisma: null,
  }
  public static generateAbilityScore(): number {
    return Array.from({ length: ROLL_COUNT }, () => getRandomScore(1, 6))
      .sort()
      .slice(1)
      .reduce((acc, v) => acc + v, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
  private getAbility(ability: string): number {
    if (this.#abilities[ability] === null) {
      this.#abilities[ability] = DnDCharacter.generateAbilityScore();
    }
    return this.#abilities[ability]!;
  }

  public get strength(): number {
    return this.getAbility('strength');
  }
  public get dexterity(): number {
    return this.getAbility('dexterity');
  }
  public get constitution(): number {
    return this.getAbility('constitution');
  }
  public get intelligence(): number {
    return this.getAbility('intelligence');
  }
  public get wisdom(): number {
    return this.getAbility('wisdom');
  }
  public get charisma(): number {
    return this.getAbility('charisma');
  }
  public get hitpoints(): number {
    return 10 + DnDCharacter.getModifierFor(this.constitution);
  }
}
