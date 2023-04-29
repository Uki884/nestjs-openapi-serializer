import { Field } from 'src/lib/serializers/field';

export class BaseEntity {
  @Field({ type: Date })
  created_at: Date;

  @Field({ type: Date })
  updated_at: Date;

  constructor(partial: Partial<BaseEntity>) {
    Object.assign(this, partial);
  }
}
