<script lang="ts">
	import type Character from '../classes/Character';

	import Eyes from './eyes.svelte';

	export let character: Character;
</script>

<main>
	<h2>Physical</h2>

	<Eyes {character} />
</main>
