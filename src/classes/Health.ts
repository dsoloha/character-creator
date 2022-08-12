import { gaussian } from '../../lib/number'

export default class Health implements IHealth {
  illnesses: string[]
  injuries: string[]

  constructor(options?: IHealth) {
    this.illnesses = options?.illnesses ?? []
    this.injuries = options?.injuries ?? []
  }

  /** Generates a new illness. */
  private generateIllnesses(): string[] {
    const illnesses: string[] = []

    if (gaussian(1, 100) > 80) illnesses.push('common cold')

    return illnesses
  }

  /** Generates a new injury. */
  private generateInjuries(): string[] {
    const injuries: string[] = []

    if (gaussian(1, 100) > 80) injuries.push('scratch')

    return injuries
  }

  generate(): IHealth {
    return {
      illnesses: this.generateIllnesses(),
      injuries: this.generateInjuries(),
    }
  }
}

export interface IHealth {
  /** Any illnesses the character currently has. */
  illnesses?: string[]
  /** Any injuries the character currently has. */
  injuries?: string[]
}
