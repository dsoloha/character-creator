<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h3>Eyes</h3>

	<p>
		{$character.name.first ?? 'Your character'} has {$character.eyes.color ?? 'blue'} eyes.
	</p>

	<label for="first">
		Eye color
		<input bind:value={$character.eyes.color}>
	</label>
</main>


