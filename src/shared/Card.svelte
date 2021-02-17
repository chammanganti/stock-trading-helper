<script lang="ts">
  export let bg = "";
  export let roundness = "";
  export let shadow = "";
</script>

<div class="px-6 py-8 {bg} {roundness} {shadow}">
  <slot />
</div>
