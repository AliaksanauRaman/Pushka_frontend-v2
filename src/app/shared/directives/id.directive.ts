import { Directive, Input, inject, signal } from '@angular/core';

import { GeneratorService } from '@shared/services/generator/generator.service';

@Directive({
  standalone: true,
})
export class IdDirective {
  private readonly _generatorService = inject(GeneratorService);

  @Input()
  public set puId(value: string) {
    this.id.set(value);
  }

  public readonly id = signal(this._generatorService.generateUUID());
}
