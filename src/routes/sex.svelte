<script lang="ts">
	import type Character from '../classes/Character';

	export let character: Character;

	$: ({sex, name} = character);
</script>

<main>
	<h2>Sex</h2>

	<p>
		{name.first ?? `Your character`} is a {sex.type}.
	</p>

	<label for="male">
		Male
		<input type="radio" bind:group={sex.type} name="sex" value={'male'} checked />
	</label>
	<label for="female">
		Female
		<input type="radio" bind:group={sex.type} name="sex" value={'female'} />
	</label>
</main>
