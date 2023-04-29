import { UserProfileEntity } from 'src/example/entities/user-profile.entity';

export class UserProfileSerializer extends UserProfileEntity {
  constructor(partial: Partial<UserProfileEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
