<script lang="ts">
	import type Character from '../classes/Character';

	export let character: Character;
</script>

<main>
	<h3>Eyes</h3>

	<p>
		{character.name.first ?? 'Your character'} has {character.eyes.color ?? 'blue'} eyes.
	</p>

	<label for="first">
		Eye color
		<input bind:value={character.eyes.color}>
	</label>
</main>


