import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';

import { MATH } from '@global/math';
import { ApplicationCardService } from '../application-card/application-card.service';
import { GeneratorService } from '@shared/services/generator/generator.service';

import { MAX_COLLAPSED_TEXT_HEIGHT } from './application-card-comment.config';
import { Application } from '@shared/types/application';

@Component({
  selector: 'pu-application-card-comment',
  templateUrl: './application-card-comment.component.html',
  styleUrls: ['./application-card-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ApplicationCardCommentComponent implements OnInit, AfterViewInit {
  private readonly _math = inject(MATH);
  private readonly _cdRef = inject(ChangeDetectorRef);
  private readonly _applicationCardService = inject(ApplicationCardService);
  private readonly _maxCollapsedTextHeight = inject(MAX_COLLAPSED_TEXT_HEIGHT);
  protected readonly _expandTextButtonId =
    inject(GeneratorService).generateUUID();

  @ViewChild('text')
  private readonly _textElement!: ElementRef<HTMLParagraphElement>;

  private readonly _application = signal<Application | null>(null);
  protected readonly _text = computed(() => {
    const application = this._application();
    return application === null ? '' : application.description;
  });
  protected readonly _isExpandable = signal(false);
  protected readonly _isExpanded = signal(false);

  public ngOnInit(): void {
    this._application.set(this._applicationCardService.getApplication());
  }

  public ngAfterViewInit(): void {
    this._isExpandable.set(
      this._math.floor(this._textElement.nativeElement.scrollHeight) >
        this._maxCollapsedTextHeight
    );
    this._cdRef.detectChanges();
  }
}
