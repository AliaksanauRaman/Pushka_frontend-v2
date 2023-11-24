import { Directive, EventEmitter, Input, Output, signal } from '@angular/core';

import { MyApplicationTypeOption } from '@shared/types/my-application-type-option';

@Directive()
export abstract class BaseMyApplicationTypeFieldComponent {
  @Input({ required: true })
  public set options(value: ReadonlyArray<MyApplicationTypeOption>) {
    this._options.set(value);
  }

  @Input()
  public set selectedOption(value: MyApplicationTypeOption) {
    this._selectedOption.set(value);
  }

  @Input()
  public set isDisabled(value: boolean) {
    this._isDisabled.set(value);
  }

  @Output()
  public readonly optionSelect = new EventEmitter<MyApplicationTypeOption>();

  protected readonly _options = signal<ReadonlyArray<MyApplicationTypeOption>>(
    []
  );
  protected readonly _selectedOption = signal<MyApplicationTypeOption | null>(
    null
  );
  protected readonly _isDisabled = signal(false);

  protected abstract selectOption(option: MyApplicationTypeOption): void;
}
