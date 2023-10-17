import { Injectable, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollingService {
  private readonly _document = inject(DOCUMENT);
  private readonly _isPageScrollable = signal(true);
  private readonly _documentElementOverflowEffect = effect(() => {
    this._document.documentElement.style.overflow = this._isPageScrollable()
      ? 'auto'
      : 'hidden';
  });

  public togglePageScrolling(): void {
    this._isPageScrollable.update((isPageScrollable) => !isPageScrollable);
  }

  public disablePageScrolling(): void {
    this._isPageScrollable.set(false);
  }

  public enablePageScrolling(): void {
    this._isPageScrollable.set(true);
  }
}
