export interface IDynamoDBRepository<T> {
  create(payload: T): Promise<T>;
  delete(id: string): Promise<boolean>;
}
