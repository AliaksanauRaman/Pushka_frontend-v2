import { JwtService } from '@shared/services/jwt/jwt.service';

import { User } from '@shared/types/user';

const jwtService = new JwtService();

export const getUserFromToken = (token: string | null): User | null => {
  if (token === null) {
    return null;
  }

  try {
    return jwtService.decode(token).toUser();
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
};
