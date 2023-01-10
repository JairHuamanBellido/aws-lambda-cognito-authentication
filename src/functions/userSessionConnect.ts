import "reflect-metadata";
import { APIGatewayEvent } from "aws-lambda";
import { DIcontainer } from "../core/di/di-container";
import { CreateSessionUseCase } from "../domain/useCase/CreateSessionUseCase";
import { CreateUserSessionDTO } from "../application/dto/CreateUserSessionDTO";

export const handler = async (event: APIGatewayEvent) => {
  if (event.requestContext) {
    try {
      const connectionId = event.requestContext.connectionId || "";
      const { user_id } = JSON.parse(event.body || "") as CreateUserSessionDTO;
      await DIcontainer.resolve(CreateSessionUseCase).execute({
        connectionId,
        user_id,
      });

      return { statusCode: 200 };
    } catch (e) {
      console.error(e);
    }
  }
};
