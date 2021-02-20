<script lang="ts">
  export let color = "gray";
  export let colorLevel = 300;
  export let raised = false;
  export let roundness = "rounded-sm";
  export let textColor = "text-gray-800";

  $: shadow = raised === true ? "hover:shadow-md" : "";
</script>

<div class="text-right">
  <button
    class="bg-{color}-{colorLevel} hover:bg-{color}-{colorLevel + 100} {shadow} px-4 py-2 {roundness} {textColor} font-bold uppercase transition ease-in duration-300"
    on:click|preventDefault
  >
    <slot />
  </button>
</div>
