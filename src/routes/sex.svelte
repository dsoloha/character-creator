<script lang="ts">
  import character from '../stores/character.store'
</script>

<main>
  <h3>Sex</h3>

  {#if $character.sex.type}
    <p>
      {$character.name.first ?? `Your character`} is a {$character.sex.type}.
    </p>
  {/if}

  <label for="male">
    Male
    <input type="radio" bind:group={$character.sex.type} name="sex" value={'male'} />
  </label>
  <label for="female">
    Female
    <input type="radio" bind:group={$character.sex.type} name="sex" value={'female'} />
  </label>
</main>
