import { BaseWebSocketDTO } from "./BaseWebSocketDTO";

export interface CreateUserSessionDTO extends BaseWebSocketDTO {
  readonly user_id: string;
}
