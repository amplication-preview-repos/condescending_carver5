import * as graphql from "@nestjs/graphql";
import { DecisionResolverBase } from "./base/decision.resolver.base";
import { Decision } from "./base/Decision";
import { DecisionService } from "./decision.service";

@graphql.Resolver(() => Decision)
export class DecisionResolver extends DecisionResolverBase {
  constructor(protected readonly service: DecisionService) {
    super(service);
  }
}
