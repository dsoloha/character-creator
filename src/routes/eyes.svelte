<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h3>Eyes</h3>

	{#if $character.eyes.color}
		<p>
			{$character.name.first ?? 'Your character'} has {$character.eyes.color ?? 'blue'} eyes.
		</p>
	{/if}

	<label for="color">
		Eye color
		<input bind:value={$character.eyes.color} />
	</label>
</main>
