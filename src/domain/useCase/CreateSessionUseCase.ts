import { inject, injectable } from "inversify";
import { SessionRepository } from "../../infrastructure/session/repository/SessionRepository";
import { ICreateSessionUsecase } from "../interface/ICreateSessionUsecase.interface";
import { Session } from "../model/Session.model";

@injectable()
export class CreateSessionUseCase implements ICreateSessionUsecase {
  constructor(
    @inject(SessionRepository)
    private readonly _sessionRepository: SessionRepository
  ) {}

  async execute(session: Session) {
    const { connectionId, user_id } = session;
    return await this._sessionRepository.create({ connectionId, user_id });
  }
}
