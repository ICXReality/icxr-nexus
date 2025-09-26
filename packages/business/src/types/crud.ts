export interface CRUD<TData, TIdentifier = string, TCreationData = TData> {
  create(item: TCreationData): Promise<TData>;
  find(id: TIdentifier): Promise<TData | null>;
  update(id: TIdentifier, item: Partial<TData>): Promise<TData>;
  delete(id: TIdentifier): Promise<void>;
}
