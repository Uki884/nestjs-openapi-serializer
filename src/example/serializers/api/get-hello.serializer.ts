import { IncludeEntity } from 'src/lib';
import { UserSerializer } from '../entities/user.serializer';
import { UserProfileSerializer } from '../entities/user-profile.serializer';
import { GroupSerializer } from '../entities/group.serializer';

class GetHelloSerializerUser extends UserSerializer {
  constructor(partial: Partial<GetHelloSerializerUser>) {
    super(partial);
    Object.assign(this, partial);
  }

  @IncludeEntity({
    serializer: UserProfileSerializer,
    description: 'ユーザーのプロフィール',
  })
  profile: UserProfileSerializer;

  @IncludeEntity({
    serializer: GroupSerializer,
    description: 'ユーザーのグループ',
    isArray: true,
  })
  groups: GroupSerializer[];
}

export class GetHelloSerializer {
  constructor(partial: any) {
    Object.assign(this, partial);
  }

  @IncludeEntity({
    serializer: GetHelloSerializerUser,
    description: 'ユーザー',
  })
  user: GetHelloSerializerUser;
}
