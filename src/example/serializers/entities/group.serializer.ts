import { GroupEntity } from '../../entities/group.entity';

export class GroupSerializer extends GroupEntity {
  constructor(partial: Partial<GroupEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
