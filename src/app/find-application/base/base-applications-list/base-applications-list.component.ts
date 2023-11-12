import {
  inject,
  NgZone,
  ElementRef,
  Renderer2,
  signal,
  effect,
  OnInit,
  Directive,
} from '@angular/core';

import { MAX_SCROLL_TOP_TO_SHOW_FAB } from './base-application-list.config';

@Directive()
export abstract class BaseApplicationsListComponent implements OnInit {
  private readonly _ngZone = inject(NgZone);
  private readonly _hostElementRef: ElementRef<HTMLElement> =
    inject(ElementRef);
  private readonly _renderer2 = inject(Renderer2);
  private readonly _maxScrollTopToShowFab = inject(MAX_SCROLL_TOP_TO_SHOW_FAB);

  protected readonly _fabIsVisible = signal(false);
  // This effect is needed to trigger changes detection
  private readonly _fabIsVisibleChangesWatcher = effect(() =>
    this._fabIsVisible()
  );

  public ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      this._renderer2.listen(
        this._hostElementRef.nativeElement,
        'scroll',
        (_event: unknown) =>
          this._fabIsVisible.set(
            this._hostElementRef.nativeElement.scrollTop >=
              this._maxScrollTopToShowFab
          )
      );
    });
  }

  protected scrollToTop(): void {
    this._ngZone.runOutsideAngular(() => {
      this._hostElementRef.nativeElement.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
