import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

@Injectable()
export abstract class BaseDialogHelperService {
  protected readonly _dialog = inject(Dialog);
}
