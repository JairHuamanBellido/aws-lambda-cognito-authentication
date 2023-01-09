import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent) => {
  if (event.requestContext) {
    try {
      const connectionId = event.requestContext.connectionId || "";

      console.log(connectionId);

      return {};
    } catch (e) {
      console.error(e);
    }
  }
};
