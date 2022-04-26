import { writable, Writable } from 'svelte/store';
import Character, { ICharacter } from '../classes/Character';

const character: Writable<ICharacter> = writable(new Character().generate());

export default character;
