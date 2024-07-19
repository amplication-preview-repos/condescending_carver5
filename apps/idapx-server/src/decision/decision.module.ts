import { Module } from "@nestjs/common";
import { DecisionModuleBase } from "./base/decision.module.base";
import { DecisionService } from "./decision.service";
import { DecisionController } from "./decision.controller";
import { DecisionResolver } from "./decision.resolver";

@Module({
  imports: [DecisionModuleBase],
  controllers: [DecisionController],
  providers: [DecisionService, DecisionResolver],
  exports: [DecisionService],
})
export class DecisionModule {}
