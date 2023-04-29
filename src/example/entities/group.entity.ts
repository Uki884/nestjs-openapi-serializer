import { BaseEntity } from './base.entity';
import { Field } from 'src/lib/serializers/field';

export class GroupEntity extends BaseEntity {
  @Field({ type: Number, example: 1 })
  id: number;

  @Field({ type: String, example: 'test' })
  name: string;

  @Field({ type: Number, example: 1 })
  user_id: number;

  constructor(partial: Partial<GroupEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
