import "reflect-metadata";
import { APIGatewayEvent } from "aws-lambda";
import { DIcontainer } from "../core/di/di-container";
import { CreateSessionUseCase } from "../domain/useCase/CreateSessionUseCase";

export const handler = async (event: APIGatewayEvent) => {
  if (event.requestContext) {
    try {
      const connectionId = event.requestContext.connectionId || "";
      await DIcontainer.resolve(CreateSessionUseCase).execute(connectionId);

      return {};
    } catch (e) {
      console.error(e);
    }
  }
};
