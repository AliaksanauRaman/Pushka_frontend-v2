import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'section[puRepresentation]',
  templateUrl: './representation.component.html',
  styleUrl: './representation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CdkDrag, TranslateModule],
})
export class RepresentationComponent {}
