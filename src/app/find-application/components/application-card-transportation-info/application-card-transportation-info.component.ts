import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ApplicationCardService } from '../application-card/application-card.service';

import { VIEW_DATE_FORMAT } from './application-card-transportation-info.config';
import { Application } from '@shared/types/application';

@Component({
  selector: 'pu-application-card-transportation-info',
  templateUrl: './application-card-transportation-info.component.html',
  styleUrls: ['./application-card-transportation-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DatePipe, NgOptimizedImage, TranslateModule],
})
export class ApplicationCardTransportationInfoComponent implements OnInit {
  private readonly _applicationCardService = inject(ApplicationCardService);
  protected readonly _viewDateFormat = inject(VIEW_DATE_FORMAT);
  
  protected readonly _application = signal<Application | null>(null);

  public ngOnInit(): void {
    this._application.set(this._applicationCardService.getApplication());
  }
}
