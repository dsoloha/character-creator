<script lang="ts">
  import character from '../../stores/character.store'
  import { getPronouns } from '../../classes/Pronouns'

  $: He = getPronouns($character).He
</script>

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
