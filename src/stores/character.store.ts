import { writable, Writable } from 'svelte/store';
import { Character } from 'character-maker';

const character: Writable<Character> = writable(new Character());

export default character;
