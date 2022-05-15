<script lang="ts">
  import character from '../stores/character.store'
  import { getPronouns } from '../classes/Pronouns'

  $: He = getPronouns($character).He
</script>

<main>
  <h2>Overview</h2>

  {#if $character.name.first}
    <p>
      <b>{$character.name.first}</b> is a <b>{$character.sex.type}</b>.
      {#if $character.eyes.colors.left || $character.eyes.colors.right}
        {#if $character.eyes.colors.left === $character.eyes.colors.right}
          {He} has <b>{$character.eyes.colors.left}</b> eyes.
        {:else}
          {He} has a
          {#if $character.eyes.colors.left}
            <b>{$character.eyes.colors.left}</b> left eye{!$character.eyes.colors.right ? '.' : ''}
          {/if}
          {#if $character.eyes.colors.left && $character.eyes.colors.right}
            and a
          {/if}
          {#if $character.eyes.colors.right}
            <b>{$character.eyes.colors.right}</b> right eye.
          {/if}
        {/if}
      {/if}
      {#if $character.age.birth}
        {He} was born on
        <b
          >{$character.age.birth.month}
          {$character.age.birth.day}, {$character.age.birth.year}</b
        >.
      {/if}
    </p>
  {/if}
</main>
