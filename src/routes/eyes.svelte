<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h3>Eyes</h3>

	{#if $character.eyes.colors.left === $character.eyes.colors.right}
		<p>
			{$character.name.first ?? 'Your character'} has {$character.eyes.colors.left} eyes.
		</p>
	{:else}
		<p>
			{$character.name.first ?? 'Your character'} has a {$character.eyes.colors.left} left eye and a {$character.eyes.colors.right} right eye.
		</p>
	{/if}

	<label for="left-color">
		Left eye color
		<input bind:value={$character.eyes.colors.left} />
	</label>
	<label for="right-color">
		Right eye color
		<input bind:value={$character.eyes.colors.right} />
	</label>
</main>
