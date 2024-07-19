import * as graphql from "@nestjs/graphql";
import { CollaborationResolverBase } from "./base/collaboration.resolver.base";
import { Collaboration } from "./base/Collaboration";
import { CollaborationService } from "./collaboration.service";

@graphql.Resolver(() => Collaboration)
export class CollaborationResolver extends CollaborationResolverBase {
  constructor(protected readonly service: CollaborationService) {
    super(service);
  }
}
