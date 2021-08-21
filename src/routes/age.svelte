<script lang="ts">
	import character from '../stores/character.store';
</script>

<main>
	<h3>Age</h3>

	<p>
		How old is {$character.name.first ?? 'your character'}?
	</p>
</main>
