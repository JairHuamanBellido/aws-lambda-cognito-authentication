import { inject, injectable } from "inversify";
import { SessionRepository } from "../../infrastructure/session/repository/SessionRepository";

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject(SessionRepository)
    private readonly _sessionRepository: SessionRepository
  ) {}

  async execute(connectionId: string) {
    return await this._sessionRepository.create({ connectionId });
  }
}
