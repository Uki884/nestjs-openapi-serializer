import { UserEntity } from '../../entities/user.entity';
import { Field } from 'src/lib/serializers/field';

export class UserSerializer extends UserEntity {
  constructor(partial: Partial<UserEntity>) {
    super(partial);
    Object.assign(this, partial);
  }

  @Field({
    type: String,
    example: 'password',
    description: 'パスワード',
    exclude: true,
  })
  password: string;

  @Field({ type: String, example: '学生' })
  get grade_text() {
    return this.grade === 1 ? '学生' : '教員';
  }
}
