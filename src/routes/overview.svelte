<script lang="ts">
  import character from '../stores/character.store'
  import { getPronouns } from '../classes/Pronouns'
  import Eyes from './overview/eyes.svelte'
  import Age from './overview/age.svelte'
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
