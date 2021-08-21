import Age from './Age';
import Eyes from './Eyes';
import Name from './Name';
import Sex from './Sex';

export default class Character {
	/** Properties pertaining to the character's age. */
	age: Age;
	/** Properties pertaining to the character's eyes. */
	eyes: Eyes;
	/** Properties pertaining to the character's name and nicknames. */
	name: Name;
	/** Properties pertaining to the character's sex and gender. */
	sex: Sex;

	constructor() {
		this.age = new Age();
		this.eyes = new Eyes();
		this.name = new Name();
		this.sex = new Sex();
	}
}
