import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';

import { MATH } from '@global/math';
import { GeneratorService } from '@shared/services/generator/generator.service';

import { MAX_COLLAPSED_TEXT_HEIGHT } from './application-card-comment.config';

@Component({
  selector: 'pu-application-card-comment',
  templateUrl: './application-card-comment.component.html',
  styleUrls: ['./application-card-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class ApplicationCardCommentComponent implements AfterViewInit {
  private readonly _math = inject(MATH);
  private readonly _cdRef = inject(ChangeDetectorRef);
  private readonly _maxCollapsedTextHeight = inject(MAX_COLLAPSED_TEXT_HEIGHT);
  protected readonly _expandTextButtonId =
    inject(GeneratorService).generateUUID();

  @Input()
  public set text(value: string) {
    this._text.set(value);
  }

  @ViewChild('text')
  private readonly _textElement!: ElementRef<HTMLParagraphElement>;

  protected readonly _text = signal('');
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
