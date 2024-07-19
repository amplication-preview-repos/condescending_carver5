import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DecisionService } from "./decision.service";
import { DecisionControllerBase } from "./base/decision.controller.base";

@swagger.ApiTags("decisions")
@common.Controller("decisions")
export class DecisionController extends DecisionControllerBase {
  constructor(protected readonly service: DecisionService) {
    super(service);
  }
}
