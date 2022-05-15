<script lang="ts">
  import character from '../../stores/character.store'
  import { getPronouns } from '../../classes/Pronouns'

  $: He = getPronouns($character).He
</script>

{#if $character.age.birth}
  {He} was born on
  <b
    >{$character.age.birth.month}
    {$character.age.birth.day}, {$character.age.birth.year}</b
  >.
{/if}
