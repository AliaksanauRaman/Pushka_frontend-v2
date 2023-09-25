import { Injectable, inject } from '@angular/core';

import { CRYPTO } from '@global/crypto';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  private readonly _crypto = inject(CRYPTO);

  public generateUUID(): string {
    return this._crypto.randomUUID();
  }
}
