import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { BaseDialogComponent } from '@shared/base/base-dialog.component';

@Component({
  selector: 'pu-under-testing-dialog',
  templateUrl: './under-testing-dialog.component.html',
  styleUrl: './under-testing-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AccentButtonComponent]
})
export class UnderTestingDialogComponent extends BaseDialogComponent {}
