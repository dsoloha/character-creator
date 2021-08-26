<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h3>Hair</h3>

	{#if $character.hair.color}
		<p>
			{$character.name.first ?? 'Your character'} has {$character.hair.length || 'short'}, {$character.hair.color ??
				'brown'} hair.
		</p>
	{/if}

	<label for="color">
		Hair color
		<input bind:value={$character.hair.color} />
	</label>

	<label for="length">
		Length
		<input bind:value={$character.hair.length} />
	</label>

	<label for="style">
		Style
		<input bind:value={$character.hair.style} />
	</label>
</main>
