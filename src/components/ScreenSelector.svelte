<script lang="ts">
  import { activeScreen } from "../store";
  import type { Screen } from "../types/Screen";

  export let screens: Screen[];

  function selectScreen(screenKey: string) {
    activeScreen.update(() => screenKey);
  }
</script>

<div class="grid grid-cols-3">
  {#each screens as screen (screen.key)}
    <div on:click={() => selectScreen(screen.key)}>{screen.title}</div>
  {/each}
</div>
