<script lang="ts">
	import Character from '../classes/Character';

	import Sex from './sex.svelte';
	import Name from './name.svelte';
	import Age from './age.svelte';
	import Physical from './physical.svelte';
	import Mental from './mental.svelte';
	import Overview from './overview.svelte';

	let _character = new Character();
	$: character = _character;
</script>

<main>
	<h1>Character Creator</h1>

	<Name {character} />
	<Sex {character} />
	<Age {character} />
	<Physical {character} />
	<Mental {character} />

	{#if character.name.full}
		<Overview {character} />
	{/if}
</main>

<style>
	:root {
		background-color: white;
		color: black;
		font-family: Arial, Helvetica, sans-serif;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			background-color: black;
			color: white;
		}
	}
</style>
