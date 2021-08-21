<script lang="ts">
	import character from '../stores/character.store';

	let He: string;

	$: if ($character.sex.type === 'male') {
		He = 'He';
	} else {
		He = 'She';
	}
</script>

<main>
	<h2>Overview</h2>

	{#if $character.name.first}
		<p>
			<b>{$character.name.full}</b> is a <b>{$character.sex.type}</b>.
			{#if $character.eyes.color}
				{He} has <b>{$character.eyes.color}</b> eyes.
			{/if}
		</p>
	{/if}
</main>
