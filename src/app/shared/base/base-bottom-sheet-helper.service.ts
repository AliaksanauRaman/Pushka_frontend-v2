import { Injectable, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { BOTTOM_SHEET_CONFIG } from '@shared/dependencies/bottom-sheet.config';

@Injectable()
export abstract class BaseBottomSheetHelperService {
  protected readonly _matBottomSheet = inject(MatBottomSheet);
  protected readonly _config = inject(BOTTOM_SHEET_CONFIG);
}
