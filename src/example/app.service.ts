import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { GroupEntity } from './entities/group.entity';

@Injectable()
export class AppService {
  getHello() {
    const user = new UserEntity({
      id: 1,
      name: 'TEST',
      grade: 1,
      password: 'HOGE',
    });

    const group = new GroupEntity({
      id: 1,
      name: 'TEST',
      user_id: 1,
    });

    console.log(user);
    return {
      user: {
        ...user,
        groups: [group],
      },
    };
  }

  getHellos() {
    return [this.getHello(), this.getHello()];
  }
}
