<script lang="ts">
  import FormLabel from "./FormLabel.svelte";

  export let disabled = false;
  export let label = "Label";
  export let placeholder = "Placeholder";
  export let ungrouped = false;
  export let value: number;
</script>

{#if ungrouped === false}
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <FormLabel>{label}</FormLabel>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
        {disabled}
        {placeholder}
        type="number"
        bind:value
      />
    </div>
  </div>
{:else}
  <FormLabel>{label}</FormLabel>
  <input
    class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
    {disabled}
    {placeholder}
    type="number"
    bind:value
  />
{/if}
