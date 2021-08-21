<script lang="ts">
	import type Character from '../classes/Character';

	export let character: Character;

	let He: string;

	if (character.sex.type === 'male') {
		He = 'He';
	} else {
		He = 'She';
	}
</script>

<main>
	<h2>Overview</h2>

	<p>
		{#if character.name.full}
			<b>{character.name.full}</b> is a <b>{character.sex.type}</b>.
		{/if}
		{#if character.eyes.color}
			{He} has <b>{character.eyes.color}</b> eyes.
		{/if}
	</p>
</main>
