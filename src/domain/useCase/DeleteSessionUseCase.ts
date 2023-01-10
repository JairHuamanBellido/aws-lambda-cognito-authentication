import { inject, injectable } from "inversify";
import { SessionRepository } from "../../infrastructure/session/repository/SessionRepository";
import { IDeleteSessionUseCase } from "../interface/IDeleteSessionUseCase.interface";

@injectable()
export class DeleteSessionUseCase implements IDeleteSessionUseCase {
  constructor(
    @inject(SessionRepository)
    private readonly _sessionRepository: SessionRepository
  ) {}
  execute(connectionId: string): Promise<boolean> {
    return this._sessionRepository.delete(connectionId);
  }
}
