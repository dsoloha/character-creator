import { random } from '../../lib/number'

export type SexType = 'male' | 'female'

export default class Sex implements ISex {
  type: SexType

  constructor(options?: ISex) {
    this.type = options?.type ?? 'male'
  }

  /** Generates whether the actor is a biological male or female. */
   private generateType(): SexType {
    return random(1, 100) > 50 ? 'male' : 'female'
  }

  generate(): ISex {
    return {
      type: this.generateType(),
    }
  }
}

export interface ISex {
  /** The biological sex of the character. */
  type: SexType
}
