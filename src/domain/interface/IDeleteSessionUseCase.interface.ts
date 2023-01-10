export interface IDeleteSessionUseCase {
  execute(connectionId: string): Promise<boolean>;
}
