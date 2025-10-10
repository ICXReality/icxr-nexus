import { DeepPartial } from "ts-essentials";

export type { DeepPartial } from "ts-essentials";

export interface CRUD<TData, TIdentifier = string> {
  create(item: TData): Promise<TData>;
  find(id: TIdentifier): Promise<TData | null>;
  update(id: TIdentifier, item: DeepPartial<TData>): Promise<void>;
  delete(id: TIdentifier): Promise<void>;
}
