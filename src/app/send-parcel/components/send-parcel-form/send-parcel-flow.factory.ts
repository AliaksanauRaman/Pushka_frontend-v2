import { Injectable, Injector, inject } from '@angular/core';

import { BaseSendParcelFlowService } from './base-send-parcel-flow.service';
import { AuthorizedSendParcelFlowService } from './authorized-send-parcel-flow.service';
import { UnauthorizedSendParcelFlowService } from './unauthorized-send-parcel-flow.service';

@Injectable({
  providedIn: 'root'
})
export class SendParcelFlowFactory {
  private readonly _injector = inject(Injector);

  public buildFlow(isUserLoggedIn: boolean): BaseSendParcelFlowService {
    if (isUserLoggedIn) {
      return this._injector.get(AuthorizedSendParcelFlowService);
    }

    return this._injector.get(UnauthorizedSendParcelFlowService);
  }
}
