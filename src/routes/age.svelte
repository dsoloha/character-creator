<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h2>Age</h2>

	How old is {$character.name.first ?? 'your character'}?
</main>
