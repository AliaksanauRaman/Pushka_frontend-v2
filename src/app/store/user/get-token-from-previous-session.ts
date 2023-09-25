import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

export const getTokenFromPreviousSession = (): string | null => {
  return localStorage.getItem(LocalStorageKey.TOKEN);
};
