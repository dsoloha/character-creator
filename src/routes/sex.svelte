<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h2>Sex</h2>

	<p>
		{$character.name.first ?? `Your character`} is a {$character.sex.type}.
	</p>

	<label for="male">
		Male
		<input type="radio" bind:group={$character.sex.type} name="sex" value={'male'} checked />
	</label>
	<label for="female">
		Female
		<input type="radio" bind:group={$character.sex.type} name="sex" value={'female'} />
	</label>
</main>
