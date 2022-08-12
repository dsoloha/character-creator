<script lang="ts">
  import character from '../stores/character.store'
</script>

<main>
  <h3>Birthplace</h3>

  {#if $character.background.birthplace}
    <p>
      {$character.name.first ?? 'Your character'} was born in <b>{$character.background.birthplace}</b>.
    </p>
  {/if}

  <label for="birthplace">
    Place of birth
    <input bind:value={$character.background.birthplace} />
  </label>
</main>
