import { Module } from "@nestjs/common";
import { CollaborationModuleBase } from "./base/collaboration.module.base";
import { CollaborationService } from "./collaboration.service";
import { CollaborationController } from "./collaboration.controller";
import { CollaborationResolver } from "./collaboration.resolver";

@Module({
  imports: [CollaborationModuleBase],
  controllers: [CollaborationController],
  providers: [CollaborationService, CollaborationResolver],
  exports: [CollaborationService],
})
export class CollaborationModule {}
