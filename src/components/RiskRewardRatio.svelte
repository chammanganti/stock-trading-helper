<script lang="ts">
  import { toFloat } from "../helper";

  import Back from "../shared/Back.svelte";
  import Button from "../shared/Button.svelte";
  import Card from "../shared/Card.svelte";
  import Form from "../shared/Form.svelte";
  import FormInputNumber from "../shared/FormInputNumber.svelte";
  import RiskRewardRatioBar from "./RiskRewardRatioBar.svelte";

  let targetPrice: number = 0;
  let entryPrice: number = 0;
  let stopLoss: number = 0;

  $: rewardDiff = targetPrice - entryPrice;
  $: riskDiff = entryPrice - stopLoss;

  $: rw = toFloat(rewardDiff / riskDiff, 2);
  $: reward = isFinite(rw) === true ? rw : 0;

  function reset() {
    targetPrice = 0;
    entryPrice = 0;
    stopLoss = 0;
  }
</script>

<div class="m-4">
  <Back />
</div>
<div class="flex">
  <div class="m-auto">
    <Card roundness="rounded-xl" shadow="shadow-md">
      <h1 class="text-xl text-center text-gray-800 font-bold mb-8">
        Risk/Reward Ratio
      </h1>
      <Form>
        <FormInputNumber
          label="Target Price"
          placeholder="0.00"
          bind:value={targetPrice}
        />
        <FormInputNumber
          label="Entry Price"
          placeholder="0.00"
          bind:value={entryPrice}
        />
        <FormInputNumber
          label="Stop Loss"
          placeholder="0.00"
          bind:value={stopLoss}
        />
        <RiskRewardRatioBar {reward} />
        <div class="mt-6" />
        <Button raised={true} on:click={() => reset()}>Reset</Button>
      </Form>
    </Card>
  </div>
</div>
