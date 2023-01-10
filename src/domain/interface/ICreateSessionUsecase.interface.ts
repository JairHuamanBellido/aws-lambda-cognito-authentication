import { Session } from "../model/Session.model";

export interface ICreateSessionUsecase {
  execute(session: Session);
}
