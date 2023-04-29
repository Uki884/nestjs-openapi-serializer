import { BaseEntity } from './base.entity';
import { Field } from 'src/lib/serializers/field';

export class UserProfileEntity extends BaseEntity {
  @Field({ type: Number, example: 1 })
  id: number;

  @Field({ type: String, example: 'test' })
  address: string;

  @Field({ type: String, example: 'test' })
  tel: string;

  @Field({ type: String, example: 'test' })
  profile: string;

  constructor(partial: Partial<UserProfileEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
