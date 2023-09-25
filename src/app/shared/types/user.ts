import { UserRole } from '@shared/enums/user-role.enum';

export class User {
  constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly role: UserRole
  ) {}
}
