import { writable, Writable } from 'svelte/store';
import { Character } from '@dsoloha/character-maker';

const character: Writable<Character> = writable(new Character().generate());

export default character;
