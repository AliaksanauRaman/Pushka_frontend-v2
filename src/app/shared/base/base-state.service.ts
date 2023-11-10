import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

export abstract class BaseStateService<T> {
  private readonly _state$ = new BehaviorSubject<T>(this.getInitialState());

  public readonly state$ = this._state$.asObservable();
  public readonly state = toSignal(this.state$);

  protected updateState(state: T): void {
    this._state$.next(state);
  }

  protected getState(): T {
    return this._state$.getValue();
  }

  protected abstract getInitialState(): T;
}
