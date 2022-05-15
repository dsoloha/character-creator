<script lang="ts">
  import character from '../stores/character.store'
  import Age from './overview/age.svelte'
  import Eyes from './overview/eyes.svelte'
  import Sex from './overview/sex.svelte'
</script>

<main>
  <h2>Overview</h2>

  {#if $character.name.first}
    <p>
      <Sex />
      <Eyes />
      <Age />
    </p>
  {/if}
</main>
