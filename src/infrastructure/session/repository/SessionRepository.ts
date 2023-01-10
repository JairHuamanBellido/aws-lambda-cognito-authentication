import { injectable } from "inversify";
import { DynamoDBRepository } from "../../db/repository/DynamoDBRepository";
import { SessionDynamoDB } from "../model/SessionDynamoDB.model";

@injectable()
export class SessionRepository extends DynamoDBRepository<SessionDynamoDB> {
  private readonly tableName: string = "aws-cognito-authentication-session";

  async create(payload: SessionDynamoDB): Promise<SessionDynamoDB> {
    const res = (await (
      await this.db
        .put({
          TableName: this.tableName,
          Item: payload,
        })
        .promise()
    ).Attributes) as SessionDynamoDB;

    return res;
  }
}
