import { CRUD, DeepPartial } from '@icxr-nexus/business/dist/types/crud'
import { SelectFromCollectionSlug } from 'node_modules/payload/dist/collections/config/types'
import {
  CollectionSlug,
  DataFromCollectionSlug,
  Payload,
  RequiredDataFromCollectionSlug,
} from 'payload'

type PayloadToType<C extends CollectionSlug, T> = (payloadData: DataFromCollectionSlug<C>) => T
type TypeToPayloadData<C extends CollectionSlug, T> = (
  data: DeepPartial<T>,
) => DeepPartial<RequiredDataFromCollectionSlug<C>>

export class PayloadCRUD<TPayloadCollection extends CollectionSlug, TData, TCreationData>
  implements CRUD<TData, string>
{
  private payload: Payload
  private collection: TPayloadCollection
  private payloadToType: PayloadToType<TPayloadCollection, TData>
  private typeToPayloadData: TypeToPayloadData<TPayloadCollection, TData>

  constructor(
    payload: Payload,
    collection: TPayloadCollection,
    payloadToType: PayloadToType<TPayloadCollection, TData>,
    typeToPayloadData: TypeToPayloadData<TPayloadCollection, TData>,
  ) {
    this.payload = payload
    this.collection = collection
    this.payloadToType = payloadToType
    this.typeToPayloadData = typeToPayloadData
  }

  async create(item: TData): Promise<TData> {
    const payloadData = this.typeToPayloadData(item as DeepPartial<TData>)
    const created = await this.payload.create({
      collection: this.collection,
      data: payloadData as RequiredDataFromCollectionSlug<TPayloadCollection>,
    })
    return this.payloadToType(created)
  }

  async find(id: string): Promise<TData | null> {
    try {
      const found = await this.payload.findByID({
        collection: this.collection,
        id: id,
      })
      if (!found) return null
      return this.payloadToType(found)
    } catch (error) {
      // Handle case where record doesn't exist
      return null
    }
  }

  async update(id: string, item: DeepPartial<TData>) {
    const payloadData = this.typeToPayloadData(item)
    await this.payload.update({
      collection: this.collection,
      id: id,
      data: payloadData as Parameters<
        typeof this.payload.update<TPayloadCollection, SelectFromCollectionSlug<TPayloadCollection>>
      >[0]['data'],
    })
  }

  async delete(id: string): Promise<void> {
    await this.payload.delete({
      collection: this.collection,
      id: id,
    })
  }
}
