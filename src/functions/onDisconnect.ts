import "reflect-metadata";
import { APIGatewayEvent } from "aws-lambda";
import { DIcontainer } from "../core/di/di-container";
import { DeleteSessionUseCase } from "../domain/useCase/DeleteSessionUseCase";

export const handler = async (event: APIGatewayEvent) => {
  if (event.requestContext) {
    try {
      const connectionId = event.requestContext.connectionId || "";
      await DIcontainer.resolve(DeleteSessionUseCase).execute(connectionId);
      return { statusCode: "200" };
    } catch (e) {
      console.error(e);
    }
  }
};
