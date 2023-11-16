import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';

import { MATH } from '@global/math';
import { GeneratorService } from '@shared/services/generator/generator.service';

import { MAX_COLLAPSED_TEXT_HEIGHT } from './application-card-comment.config';
import { Application } from '@shared/types/application';
import { ApplicationDirective } from '../../directives/application/application.directive';

@Component({
  selector: 'pu-application-card-comment',
  templateUrl: './application-card-comment.component.html',
  styleUrls: ['./application-card-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [
    {
      directive: ApplicationDirective,
      inputs: ['application'],
    },
  ],
})
export class ApplicationCardCommentComponent implements AfterViewInit {
  private readonly _math = inject(MATH);
  private readonly _cdRef = inject(ChangeDetectorRef);
  private readonly _application =
    inject<ApplicationDirective<Application>>(ApplicationDirective);
  private readonly _maxCollapsedTextHeight = inject(MAX_COLLAPSED_TEXT_HEIGHT);
  protected readonly _expandTextButtonId =
    inject(GeneratorService).generateUUID();

  @ViewChild('text')
  private readonly _textElement!: ElementRef<HTMLParagraphElement>;

  protected readonly _text = computed(() => {
    const application = this._application.value();
    return application === null ? '' : application.description;
  });
  protected readonly _isExpandable = signal(false);
  protected readonly _isExpanded = signal(false);

  public ngAfterViewInit(): void {
    this._isExpandable.set(
      this._math.floor(this._textElement.nativeElement.scrollHeight) >
        this._maxCollapsedTextHeight
    );
    this._cdRef.detectChanges();
  }
}
