<script lang="ts">
  import RiskRewardRatio from "./components/RiskRewardRatio.svelte";
  import RiskManagementSimple from "./components/RiskManagementSimple.svelte";
  import RiskManagementWFees from "./components/RiskManagementWFees.svelte";
  import ScreenSelector from "./components/ScreenSelector.svelte";
  import {
    RISK_MANAGEMENT_SIMPLE,
    RISK_MANAGEMENT_W_FEES,
    RISK_REWARD_RATIO,
    SCREENS,
  } from "./constants";
  import { activeScreen } from "./store";
</script>

<main>
  {#if $activeScreen === RISK_REWARD_RATIO}
    <RiskRewardRatio />
  {:else if $activeScreen === RISK_MANAGEMENT_SIMPLE}
    <RiskManagementSimple />
  {:else if $activeScreen === RISK_MANAGEMENT_W_FEES}
    <RiskManagementWFees />
  {:else}
    <ScreenSelector screens={SCREENS} />
  {/if}
</main>
