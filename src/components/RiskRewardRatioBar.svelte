<script lang="ts">
  import { tweened } from "svelte/motion";

  export let reward = 0;

  let risk = 1;
  $: totalRiskReward = risk + reward;
  $: riskPercentage = Math.floor((100 / totalRiskReward) * risk);
  $: rewardPercentage = Math.floor((100 / totalRiskReward) * reward) || 0;

  const tweenedRisk = tweened(0);
  const tweenedReward = tweened(0);
  $: tweenedRisk.set(riskPercentage);
  $: tweenedReward.set(rewardPercentage);
</script>

<p class="text-gray-700 font-bold">1 : {reward}</p>
<div class="flex">
  <span class="h-3 w-full bg-red-400" style="width: {$tweenedRisk}%" />
  <span class="h-3 w-full bg-green-400" style="width: {$tweenedReward}%" />
</div>
