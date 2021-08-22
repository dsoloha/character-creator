<script lang="ts">
	import character from '../stores/character.store';
	import { getPronouns } from '../utils/pronouns';

	$: ({ He } = getPronouns($character));
</script>

<main>
	<h2>Overview</h2>

	{#if $character.name.first}
		<p>
			<b>{$character.name.full}</b> is a <b>{$character.sex.type}</b>.
			{#if $character.eyes.color}
				{He} has <b>{$character.eyes.color}</b> eyes.
			{/if}
			{#if $character.age.birth}
				{He} was born on
				<b
					>{$character.age.birth.month}
					{$character.age.birth.day}, {$character.age.birth.year}</b
				>.
			{/if}
		</p>
	{/if}
</main>
