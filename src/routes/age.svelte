<script lang="ts">
  import character from '../stores/character.store'
  import type { Month } from '../classes/Age'
  import { asOrdinal } from '../../lib/string'

  let selected: Month

  const months: Array<{ count: number; name: Month }> = [
    {
      count: 30,
      name: 'January',
    },
    {
      count: 30,
      name: 'February',
    },
    {
      count: 30,
      name: 'March',
    },
    {
      count: 30,
      name: 'April',
    },
    {
      count: 30,
      name: 'May',
    },
    {
      count: 30,
      name: 'June',
    },
    {
      count: 30,
      name: 'July',
    },
    {
      count: 30,
      name: 'August',
    },
    {
      count: 30,
      name: 'September',
    },
    {
      count: 30,
      name: 'October',
    },
    {
      count: 30,
      name: 'November',
    },
    {
      count: 30,
      name: 'December',
    },
  ]
</script>

<main>
  <h3>Age</h3>

  <p>
    {$character.name.first ?? 'your character'} was born on the {asOrdinal($character.age.birth.day)} of {$character.age
      .birth.month} in {$character.age.birth.year}.
  </p>

  <label for="year">
    Year
    <input bind:value={$character.age.birth.year} />
  </label>

  <label for="month">
    Month
    <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={selected} on:change={() => ($character.age.birth.month = selected)}>
      {#each months as month}
        <option value={month.name}>
          {month.name}
        </option>
      {/each}
    </select>
  </label>

  <label for="day">
    Day
    <input bind:value={$character.age.birth.day} />
  </label>
</main>
