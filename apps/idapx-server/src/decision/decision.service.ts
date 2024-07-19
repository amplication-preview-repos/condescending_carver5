import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DecisionServiceBase } from "./base/decision.service.base";

@Injectable()
export class DecisionService extends DecisionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
