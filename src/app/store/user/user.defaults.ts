import { getTokenFromPreviousSession } from './get-token-from-previous-session';
import { getUserFromToken } from './get-user-from-token';
import { UserStateModel } from './user-state.model';

const token = getTokenFromPreviousSession();
const initialUser = getUserFromToken(token);

export const USER_DEFAULTS: UserStateModel = {
  user: initialUser,
  loginError: null,
};
