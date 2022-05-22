export default class Name implements IName {
  first: string
  middle: string | null
  last: string | null
  nicknames: string[]

  constructor(options?: IName) {
    this.first = options?.first ?? ''
    this.middle = options?.middle ?? null
    this.last = options?.last ?? null
    this.nicknames = options?.nicknames ?? []
  }

  /** Returns the character's full name, or as much as possible. */
  get full(): string {
    const name: string[] = []

    if (this.first) name.push(this.first)
    if (this.middle) name.push(this.middle)
    if (this.last) name.push(this.last)

    return name.join(' ')
  }

  /** Generates a new first name as `name, nickname`. */
  private generateFirst(): IFirstName {
    // TODO: hook this up to a database of first names
    const names: IFirstName[] = []

    names.push({ name: 'John', nicknames: ['Johnny'] })

    return names.random()
  }

  /** Generates a new middle name. */
  private generateMiddle(): string {
    // TODO: hook this up to a database of middle names
    const names: string[] = []

    names.push('Jacob')

    return names.random()
  }

  /** Generates a new last name. */
  private generateLast(): string {
    // TODO: hook this up to a database of last names
    const names: string[] = []

    names.push('Smith')

    return names.random()
  }

  generate(): Name {
    return new Name({
      first: this.generateFirst().name,
      middle: this.generateMiddle(),
      last: this.generateLast(),
      nicknames: this.generateFirst().nicknames,
    })
  }
}

export interface IFirstName {
  /** The legal first name. */
  name: string
  /** A list of any nicknames. */
  nicknames: string[]
}

export interface IName {
  /** The character's first name. */
  first?: string
  /** The character's middle name, if any. */
  middle?: string | null
  /** The character's last name, if any. */
  last?: string | null
  /** Any nicknames the character has. */
  nicknames?: string[]
}
