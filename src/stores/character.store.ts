import { writable, Writable } from 'svelte/store'
import Character from '../classes/Character'

const character: Writable<Character> = writable(new Character())

export default character
