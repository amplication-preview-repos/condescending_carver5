import { DecisionWhereInput } from "./DecisionWhereInput";
import { DecisionOrderByInput } from "./DecisionOrderByInput";

export type DecisionFindManyArgs = {
  where?: DecisionWhereInput;
  orderBy?: Array<DecisionOrderByInput>;
  skip?: number;
  take?: number;
};
