import Sex from './Sex';
import Name from './Name';
import Eyes from './Eyes';

export default class Character {
	/** Properties pertaining to the character's sex and gender. */
	sex: Sex;
	/** Properties pertaining to the character's name and nicknames. */
	name: Name;
	/** Properties pertaining to the character's eyes. */
	eyes: Eyes;

	constructor() {
		this.sex = new Sex();
		this.name = new Name();
		this.eyes = new Eyes();
	}
}
