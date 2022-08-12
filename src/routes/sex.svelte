<script lang="ts">
  import character from '../stores/character.store'

  let alternatePronouns = false
</script>

<main>
  <h3>Sex</h3>

  {#if $character.sex.type}
    <p>
      {$character.name.first ?? `Your character`} is a <b>{$character.sex.type}</b>.
    </p>
  {/if}

  <label for="male">
    <input type="radio" bind:group={$character.sex.type} name="sex" value={'male'} />
    Male
  </label>
  <label for="female">
    <input type="radio" bind:group={$character.sex.type} name="sex" value={'female'} />
    Female
  </label>
  <br>
  <label for="pronouns">
    <input type="checkbox" bind:checked={alternatePronouns} name="pronouns" id="pronouns">
    This character uses alternate pronouns
  </label>

  {#if alternatePronouns}
    <label for="subject">
      <input bind:value={$character.pronouns.subject} />
      Subject
    </label>
    <label for="object">
      <input bind:value={$character.pronouns.object} />
      Object
    </label>
    <label for="possessive">
      <input bind:value={$character.pronouns.possessive} />
      Possessive
    </label>
    <label for="possessive-pronoun">
      <input bind:value={$character.pronouns.possessivePronoun} />
      Possessive Pronoun
    </label>
    <label for="noun">
      <input bind:value={$character.pronouns.noun} />
      Noun
    </label>
    <label for="reflexive">
      <input bind:value={$character.pronouns.reflexive} />
      Reflexive
    </label>
  {/if}
</main>
