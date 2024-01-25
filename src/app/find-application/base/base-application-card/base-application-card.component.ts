import {
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';

import { ApplicationDirective } from '../../directives/application/application.directive';

import { Application } from '@shared/types/application';
import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Directive()
export abstract class BaseApplicationCardComponent<
  T extends Application = Application
> {
  protected readonly _application =
    inject<ApplicationDirective<T>>(ApplicationDirective);

  @Input()
  public set isMine(value: boolean) {
    this._isMine.set(value);
  }

  @Output()
  public readonly deleted = new EventEmitter<void>();

  @HostBinding('class.application-card--expired')
  public get hasApplicationCardExpiredClass(): boolean {
    return this._application.value()?.isExpired || false;
  }

  protected readonly _isMine = signal(false);
  protected abstract get _type(): MyApplicationType;
}
