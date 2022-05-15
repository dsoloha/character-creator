<script lang="ts">
  import character from '../stores/character.store'
  import '../../lib/array'
</script>

<main>
  <h3>Hair</h3>

  {#if $character.hair.head.color}
    <p>
      {$character.name.first || 'Your character'} has
      {#if $character.hair.head.length}
        <b>{$character.hair.head.length}</b>,
      {/if}
      {#if $character.hair.head.style}
        <b>{$character.hair.head.style}</b>,
      {/if}
      <b>{$character.hair.head.color}</b> hair.
    </p>
  {/if}

  <label for="color">
    Hair color
    <input bind:value={$character.hair.head.color} />
  </label>

  {#if $character.hair.head.color}
    <label for="length">
      Length
      <input bind:value={$character.hair.head.length} />
    </label>

    <label for="style">
      Style
      <input bind:value={$character.hair.head.style} />
    </label>
  {/if}
</main>
