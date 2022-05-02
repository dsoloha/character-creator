interface Array<T> {
  /**
   * Returns a random member from the given array.
   *
   * Does not modify the original array.
   */
  random(): T

  /** Converts an array of strings into a sentence parted by commas. */
  toSentence(): string
}

Array.prototype.random = function random<T>(this: Array<T>): T {
  return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.toSentence = function toSentence(this: Array<string>): string {
  return this.reduce((res, ch, i, arr) => res + (i === arr.length - 1 ? ' and ' : ', ') + ch)
}
