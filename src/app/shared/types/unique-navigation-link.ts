import { NavigationLink } from './navigation-link';

export class UniqueNavigationLink extends NavigationLink {
  constructor(public readonly id: number, label: string, path: string) {
    super(label, path);
  }
}
