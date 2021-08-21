<script lang="ts">
  import character from '../stores/character.store';
</script>

<main>
  <h3>Age</h3>

  <p>
    When is {$character.name.first ?? 'your character'}'s birthday?
  </p>

  <label for="year">
    Year
    <input bind:value={$character.age.birth.year} />
  </label>

  <label for="month">
    Month
    <input bind:value={$character.age.birth.month} />
  </label>

  <label for="day">
    Day
    <input bind:value={$character.age.birth.day} />
  </label>
</main>
