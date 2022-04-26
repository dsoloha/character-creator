<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h3>Hair</h3>

	{#if $character.hair.head.color}
		<p>
			{$character.name.first ?? 'Your character'} has {$character.hair.head.length ?? 'short'}, {$character.hair.head.color ??
				'brown'} hair.
		</p>
	{/if}

	<label for="color">
		Hair color
		<input bind:value={$character.hair.head.color} />
	</label>

	<label for="length">
		Length
		<input bind:value={$character.hair.head.length} />
	</label>

	<label for="style">
		Style
		<input bind:value={$character.hair.head.style} />
	</label>
</main>
