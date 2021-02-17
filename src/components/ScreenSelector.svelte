<script lang="ts">
  import type { Screen } from "../types/Screen";
  import ScreenSelectorItem from "./ScreenSelectorItem.svelte";

  export let screens: Screen[];
</script>

<div class="flex h-screen align-middle">
  <div class="m-auto">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center">
      {#each screens as screen (screen.key)}
        <ScreenSelectorItem {screen} />
      {/each}
    </div>
  </div>
</div>
