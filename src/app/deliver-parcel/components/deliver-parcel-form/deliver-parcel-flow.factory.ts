import { Injectable, Injector, inject } from '@angular/core';

import { BaseDeliverParcelFlowService } from './base-deliver-parcel-flow.service';
import { AuthorizedDeliverParcelFlowService } from './authorized-deliver-parcel-flow.service';
import { UnauthorizedSendParcelFlowService } from './unauthorized-deliver-parcel-flow.service';

@Injectable({
  providedIn: 'root',
})
export class DeliverParcelFlowFactory {
  private readonly _injector = inject(Injector);

  public buildFlow(isUserLoggedIn: boolean): BaseDeliverParcelFlowService {
    if (isUserLoggedIn) {
      return this._injector.get(AuthorizedDeliverParcelFlowService);
    }

    return this._injector.get(UnauthorizedSendParcelFlowService);
  }
}
