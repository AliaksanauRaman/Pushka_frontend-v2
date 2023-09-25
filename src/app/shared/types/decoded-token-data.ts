import { User } from './user';
import { UserRole } from '@shared/enums/user-role.enum';

export class DecodedTokenData {
  constructor(
    public readonly userId: number,
    public readonly userEmail: string,
    public readonly userRole: UserRole,
    public readonly tokenExp: number,
    public readonly tokenIat: number
  ) {}

  public toUser(): User | null {
    if (this.checkIsTokenExpired()) {
      return null;
    }

    return new User(this.userId, this.userEmail, this.userRole);
  }

  private checkIsTokenExpired(): boolean {
    return this.tokenExp < Date.now() / 1000;
  }
}
