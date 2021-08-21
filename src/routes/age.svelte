<script lang="ts">
	import type Character from '../classes/Character';

	export let character: Character;
</script>

<main>
	<h2>Age</h2>

	How old is {character.name.first ?? 'your character'}?
</main>
