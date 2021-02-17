<script lang="ts">
  import Card from "../shared/Card.svelte";
  import { activeScreen } from "../store";
  import type { Screen } from "../types/Screen";

  export let screen: Screen;

  function selectScreen(screenKey: string) {
    activeScreen.update(() => screenKey);
  }
</script>

<div class="m-4">
  <Card bg="bg-white" roundness="rounded-xl" shadow="shadow-md">
    <div class="text-center mb-8">
      <h1 class="text-xl font-bold">{screen.title}</h1>
      <span class="text-xs text-gray-700">{screen.description}</span>
    </div>
    <div class="text-right">
      <button
        class="bg-blue-600 hover:bg-blue-700 rounded-full shadow-xs hover:shadow-md p-2 transition ease-in duration-300"
        on:click={() => selectScreen(screen.key)}
      >
        <div class="flex">
          <p class="text-sm text-white uppercase pl-1 mr-2">Open</p>
          <svg
            class="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
  </Card>
</div>
