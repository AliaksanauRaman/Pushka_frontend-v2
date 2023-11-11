import { Injectable, InjectionToken, inject, signal } from '@angular/core';

import { IComparable } from '@shared/interfaces/comparable';

export const DIALOG_TABS = new InjectionToken<ReadonlyArray<DialogTab>>(
  'DIALOG_TABS'
);

export class DialogTab implements IComparable<DialogTab> {
  constructor(public readonly label: string) {}

  public equalsTo(dialogTab: DialogTab): boolean {
    return this.label === dialogTab.label;
  }
}

@Injectable()
export class DialogTabsService {
  public readonly tabs = signal(inject(DIALOG_TABS));
  public readonly activeTab = signal<DialogTab | null>(null);

  public activateFirstTab(): void {
    this.activateTab(this.tabs()[0]);
  }

  public activateTab(tab: DialogTab): void {
    this.activeTab.set(tab);
  }

  public checkIsTabActive(tab: DialogTab): boolean {
    const activeTab = this.activeTab();

    if (activeTab === null) {
      return false;
    }

    return activeTab.equalsTo(tab);
  }
}
