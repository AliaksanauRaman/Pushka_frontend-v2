import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { GeneratorService } from '@shared/services/generator/generator.service';

import { ApplicationDirective } from '../../directives/application/application.directive';

import { Application } from '@shared/types/application';

@Component({
  selector: 'pu-application-card-comment',
  templateUrl: './application-card-comment.component.html',
  styleUrls: ['./application-card-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule],
  hostDirectives: [
    {
      directive: ApplicationDirective,
      inputs: ['application'],
    },
  ],
})
export class ApplicationCardCommentComponent {
  private readonly _application =
    inject<ApplicationDirective<Application>>(ApplicationDirective);
  protected readonly _expandTextButtonId =
    inject(GeneratorService).generateUUID();

  protected readonly _text = computed(() => {
    const application = this._application.value();
    return application === null
      ? ''
      : this.capitalizeFirstLetter(application.description.trim());
  });
  protected readonly _isExpanded = signal(false);
  protected readonly _expandTextLabel = computed(() =>
    this._isExpanded() ? 'actionLabel.less' : 'actionLabel.more'
  );
  protected readonly _isApplicationExpired = computed(
    () => this._application.value()?.isExpired || false
  );

  private capitalizeFirstLetter(text: string): string {
    return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
  }
}
