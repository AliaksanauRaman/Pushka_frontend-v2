import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { z } from 'zod';

import { BaseUserActivation } from '../user-activation';

@Injectable()
export class ActivateUserPageService {
  private readonly _activatedRoute = inject(ActivatedRoute);

  public readonly userActivation$ = this._activatedRoute.data.pipe(
    map(
      (data) =>
        z
          .object({
            userActivation: z.instanceof(BaseUserActivation),
          })
          .strict()
          .parse(data).userActivation
    )
  );
}
