<script lang="ts">
	import character from '../stores/character.store';

	import Sex from './sex.svelte';
	import Name from './name.svelte';
	import Age from './age.svelte';
	import Physical from './physical.svelte';
	import Mental from './mental.svelte';
	import Overview from './overview.svelte';
</script>

<main>
	<h1>Character Creator</h1>

	<Name />
	<Sex />
	<Age />
	<Physical />
	<Mental />

	{#if $character.name.full}
		<Overview />
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
