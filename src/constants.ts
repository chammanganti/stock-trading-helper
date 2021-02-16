import type { Screen } from "./types/Screen";

const RISK_REWARD_RATIO = "risk-reward";
const RISK_MANAGEMENT_SIMPLE = "risk-mgmt-simple";
const RISK_MANAGEMENT_W_FEES = "risk-mgmt-w-fees";
const SCREENS: Screen[] = [
  {
    key: RISK_REWARD_RATIO,
    title: "Risk Reward Ratio",
  },
  {
    key: RISK_MANAGEMENT_SIMPLE,
    title: "Risk Management (Simple)",
  },
  {
    key: RISK_MANAGEMENT_W_FEES,
    title: "Risk Management (w/ Fees)",
  },
];

export {
  RISK_REWARD_RATIO,
  RISK_MANAGEMENT_SIMPLE,
  RISK_MANAGEMENT_W_FEES,
  SCREENS,
};
