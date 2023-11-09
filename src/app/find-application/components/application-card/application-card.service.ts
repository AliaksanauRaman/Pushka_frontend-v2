import { Injectable } from '@angular/core';

import { Application } from '@shared/types/application';

@Injectable()
export class ApplicationCardService {
  private _application: Application | null = null;

  public setApplication(value: Application): void {
    this._application = value;
  }

  public getApplication(): Application | null {
    return this._application;
  }
}
