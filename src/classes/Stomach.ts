import '../../lib/array'

export default class Stomach implements IStomach {
  shape: string

  constructor(options?: IStomach) {
    this.shape = options?.shape ?? ''
  }

  /** Generates the stomach's shape. */
  private generateShape(): string {
    const shapes = ['flat', 'round']
    const shape = shapes.random()

    return shape
  }

  generate(): IStomach {
    return {
      shape: this.generateShape(),
    }
  }
}

export interface IStomach {
  /** The shape of the character's stomach. */
  shape?: string
}
