import { Injectable, Signal, signal } from '@angular/core';

@Injectable()
export class PanelService {
  private readonly _isPanelOpened = signal(false);

  public get isOpened(): Signal<boolean> {
    return this._isPanelOpened.asReadonly();
  }

  public toggle(): void {
    if (this._isPanelOpened()) {
      this.close();
    } else {
      this.open();
    }
  }

  public open(): void {
    this._isPanelOpened.set(true);
  }

  public close(): void {
    this._isPanelOpened.set(false);
  }
}
