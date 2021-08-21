<script lang="ts">
  import character from '../stores/character.store';

  import Mental from './mental.svelte';
  import Name from './name.svelte';
  import Overview from './overview.svelte';
  import Physical from './physical.svelte';
</script>

<main>
  <h1>Character Creator</h1>

  <Name />
  {#if $character.name.full}
    <Physical />
    <Mental />

    <Overview />
  {/if}
</main>

<style>
  :root {
    background-color: white;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      background-color: black;
      color: white;
    }
  }
</style>
