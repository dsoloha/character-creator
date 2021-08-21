<script lang="ts">
	import character from '../stores/character.store';

	$: nicknames = [];

	let nickname: string;
</script>

<main>
	<h2>Name</h2>

	{#if $character.name.first}
		<p>
			Your character's name is {$character.name.full}.
		</p>
	{/if}

	<label for="first">
		First name
		<input bind:value={$character.name.first}>
	</label>

	<label for="middle">
		Middle name
		<input bind:value={$character.name.middle}>
	</label>

	<label for="last">
		Last name
		<input bind:value={$character.name.last}>
	</label>

	<label for="nickname">
		Nickname
		<input bind:value={nickname}>
		<button on:click={() => {
			nicknames = [...nicknames, nickname];	// arrays aren't fully reactive in Svelte yet

			nickname = '';
		}}>Add</button>
	</label>

	<p>
		Nicknames: {nicknames.join(', ')}
	</p>
</main>
