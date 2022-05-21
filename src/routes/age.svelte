<script lang="ts">
  import character from '../stores/character.store'
  import type { Month } from '../classes/Age'
  import { asOrdinal } from '../../lib/string'

  let selected: Month

  const year = $character.age.birth.year ?? new Date().getFullYear()
  const leapYear = year % 4 === 0
  const february = leapYear ? 29 : 28
  const months: Array<{ count: number; name: Month }> = [
    {
      count: 31,
      name: 'January',
    },
    {
      count: february,
      name: 'February',
    },
    {
      count: 31,
      name: 'March',
    },
    {
      count: 30,
      name: 'April',
    },
    {
      count: 31,
      name: 'May',
    },
    {
      count: 30,
      name: 'June',
    },
    {
      count: 31,
      name: 'July',
    },
    {
      count: 31,
      name: 'August',
    },
    {
      count: 30,
      name: 'September',
    },
    {
      count: 31,
      name: 'October',
    },
    {
      count: 30,
      name: 'November',
    },
    {
      count: 31,
      name: 'December',
    },
  ]

  $: userMonth = months.find((m) => m.name === $character.age.birth.month)
</script>

<main>
  <h3>Age</h3>

  <p>
    {$character.name.first ?? 'your character'} was born on the <b>{asOrdinal($character.age.birth.day)}</b> of
    <b>
      {$character.age.birth.month}
    </b>
    in <b>{$character.age.birth.year}</b>.
  </p>

  <label for="year">
    Year
    <input type="number" bind:value={$character.age.birth.year} />
  </label>

  <label for="month">
    Month
    <!-- svelte-ignore a11y-no-onchange -->
    <select
      bind:value={selected}
      on:change={() => (($character.age.birth.month = selected), ($character.age.birth.day = 1))}
    >
      {#each months as month}
        <option value={month.name}>
          {month.name}
        </option>
      {/each}
    </select>
  </label>

  <div id="bg-white">
    <label for="day">
      Day
      <label>
        <input type="number" bind:value={$character.age.birth.day} min="1" max={userMonth.count} />
        <input type="range" bind:value={$character.age.birth.day} min="1" max={userMonth.count} />
      </label>
    </label>
  </div>
</main>

<style>
  #bg-white {
    background-color: white;
    color: black;
    display: inline-block;
  }
</style>
