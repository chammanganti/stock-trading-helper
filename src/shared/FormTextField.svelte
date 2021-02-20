<script lang="ts">
  import FormLabel from "./FormLabel.svelte";
</script>

<div class="md:flex md:items-center mb-6">
  <div class="md:w-1/3">
    <FormLabel>
      <slot name="label" />
    </FormLabel>
  </div>
  <div class="md:w-2/3 pl-5">
    <slot name="value" />
  </div>
</div>

<!-- https://github.com/sveltejs/svelte/issues/4546 -->
{#if false}<slot />{/if}
