<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h3>Sex</h3>

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
