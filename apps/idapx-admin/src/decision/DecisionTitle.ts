import { Decision as TDecision } from "../api/decision/Decision";

export const DECISION_TITLE_FIELD = "id";

export const DecisionTitle = (record: TDecision): string => {
  return record.id?.toString() || String(record.id);
};
