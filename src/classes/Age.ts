import { gaussian, random } from '../../lib/number'
import '../../lib/array'

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export default class Age implements IAge {
  birth: {
    day: number
    month: Month
    year: number
  }

  constructor(options?: IAge) {
    this.birth = {
      day: options?.birth?.day ?? 1,
      month: options?.birth?.month ?? 'January',
      year: options?.birth?.year ?? new Date().getFullYear(),
    }
  }

  /** Generates a new birth day. */
  private generateBirthDay(year: number, month: Month): number {
    if (year % 4 === 0 && month === 'February') return random(1, 29)
    if (month === 'February') return random(1, 28)
    if (['January', 'March', 'May', 'June', 'August', 'October', 'December'].includes(month)) return random(1, 31)
    return random(1, 30)
  }

  /** Generates a new birth month. */
  private generateBirthMonth(): Month {
    const months: Month[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    return months.random()
  }

  /** Generates a new birth year. */
  private generateBirthYear(): number {
    return gaussian(new Date().getFullYear() - 100, new Date().getFullYear(), 0.75)
  }

  /** Generates a new, full birthday. */
  private generateBirth(): IBirth {
    const year = this.generateBirthYear()
    const month = this.generateBirthMonth()
    const day = this.generateBirthDay(year, month)

    return { day, month, year }
  }

  /**
   * Converts a given date object (day, month, year) to an object of the `Date` type.
   * @param date The date to convert.
   */
  toDate(date: IBirth): Date {
    return new Date(`${date.month} ${date.day}, ${date.year}`)
  }

  generate(): IAge {
    return {
      birth: this.generateBirth(),
    }
  }
}

export interface IAge {
  /** Properties pertaining to the character's birthtime. */
  birth?: IBirth
}

export interface IBirth {
  /** On which day of the month the character was born. */
  day?: number
  /** During which month of the year the character was born. */
  month?: Month
  /** During what year the character was born. */
  year?: number
}
