<script lang="ts">
  import { toFloat } from "../helper";

  import Back from "../shared/Back.svelte";
  import Button from "../shared/Button.svelte";
  import Card from "../shared/Card.svelte";
  import Form from "../shared/Form.svelte";
  import FormInputNumber from "../shared/FormInputNumber.svelte";
  import FormTextField from "../shared/FormTextField.svelte";

  let capital: number = 0;
  let capitalRiskPercentage: number = 0;
  let entryPrice: number = 0;
  let stopLoss: number = 0;

  $: amountToRisk = capital * (capitalRiskPercentage / 100);
  $: risk = toFloat(entryPrice - stopLoss, 2);
  $: shares = Math.floor(amountToRisk / risk);
  $: sharesToBuy = isFinite(shares) === true ? shares : 0;
  $: totalAmount = toFloat(sharesToBuy * entryPrice, 2);

  function reset() {
    capital = 0;
    capitalRiskPercentage = 0;
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
        Risk Management
      </h1>
      <Form>
        <FormInputNumber
          label="Capital"
          placeholder="0.00"
          bind:value={capital}
        />
        <FormInputNumber
          label="Capital to risk per trade (%)"
          placeholder="0"
          bind:value={capitalRiskPercentage}
        />
        <FormTextField>
          <span slot="label">Amount to risk</span>
          <p class="text-right" slot="value">{amountToRisk}</p>
        </FormTextField>
        <FormInputNumber label="Entry Price" bind:value={entryPrice} />
        <FormInputNumber label="Stop Loss" bind:value={stopLoss} />
        <FormTextField>
          <span slot="label">Risk</span>
          <p class="text-right" slot="value">{risk}</p>
        </FormTextField>
        <FormTextField>
          <span slot="label">Shares to buy</span>
          <p class="font-bold text-right" slot="value">
            {sharesToBuy}
            <span class="text-gray-600">({totalAmount})</span>
          </p>
        </FormTextField>
        <div class="mt-6" />
        <Button raised={true} on:click={() => reset()}>Reset</Button>
      </Form>
    </Card>
    <div class="mb-6" />
  </div>
</div>
