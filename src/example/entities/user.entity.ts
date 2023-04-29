import { BaseEntity } from './base.entity';
import { Field } from 'src/lib/serializers/field';

export class UserEntity extends BaseEntity {
  @Field({ type: Number, example: 1 })
  id = 1;

  @Field({ type: String, example: 'test' })
  name = 'TEST';

  @Field({ type: Number, example: 1 })
  grade = 1;

  @Field({ type: String, example: 'password' })
  password = 'HOGE';

  constructor(partial: Partial<UserEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
