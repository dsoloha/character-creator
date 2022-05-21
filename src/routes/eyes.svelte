<script lang="ts">
  import character from '../stores/character.store'

  $: He = $character.pronouns.He
</script>

<main>
  <h3>Eyes</h3>

  {#if $character.eyes.colors.left || $character.eyes.colors.right}
    {#if $character.eyes.colors.left === $character.eyes.colors.right}
      <p>
        {$character.name.first ?? 'Your character'} has <b>{$character.eyes.colors.left}</b> eyes.
      </p>
    {:else}
      <p>
        {#if $character.eyes.colors.left}
          {$character.name.first ?? 'Your character'} has a <b>{$character.eyes.colors.left}</b> left eye.
        {/if}
        {#if $character.eyes.colors.right}
          {He} has a <b>{$character.eyes.colors.right}</b> right eye.
        {/if}
      </p>
    {/if}
  {/if}

  <label for="left-color">
    Left eye color
    <input bind:value={$character.eyes.colors.left} />
  </label>
  <label for="right-color">
    Right eye color
    <input bind:value={$character.eyes.colors.right} />
  </label>
</main>
