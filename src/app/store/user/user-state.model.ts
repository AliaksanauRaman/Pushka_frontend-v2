import { User } from "@shared/types/user";

export type UserStateModel = Readonly<{
  user: User | null;
  loginError: unknown;
}>;
