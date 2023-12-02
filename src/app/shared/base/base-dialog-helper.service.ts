import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { DIALOG_CONFIG } from '@shared/dependencies/dialog.config';

@Injectable()
export abstract class BaseDialogHelperService {
  protected readonly _dialog = inject(Dialog);
  protected readonly _config = inject(DIALOG_CONFIG);
}
