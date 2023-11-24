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
import { toSignal } from '@angular/core/rxjs-interop';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { MAX_SCROLL_TOP_TO_SHOW_FAB } from './base-application-list.config';
import { UserState } from '@store/user';
import { User } from '@shared/types/user';

@Directive()
export abstract class BaseApplicationsListComponent implements OnInit {
  private readonly _ngZone = inject(NgZone);
  private readonly _hostElementRef: ElementRef<HTMLElement> =
    inject(ElementRef);
  private readonly _renderer2 = inject(Renderer2);
  private readonly _maxScrollTopToShowFab = inject(MAX_SCROLL_TOP_TO_SHOW_FAB);

  @Select(UserState.stream)
  private readonly _user$!: Observable<User | null>;

  protected readonly _user = toSignal(this._user$);
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

  protected scrollToTheBeginning(): void {
    this._ngZone.runOutsideAngular(() => {
      this._hostElementRef.nativeElement.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
