import { DateRange as MatDateRange } from '@angular/material/datepicker';

import { mapDateToUTCDate } from '@shared/utils/map-date-to-utc-date';

export class DateRange extends MatDateRange<Date> {
  constructor(startDate: Date | null = null, endDate: Date | null = null) {
    super(startDate, endDate);
  }

  public toUTC(): DateRange {
    const startDate = this.start === null ? null : mapDateToUTCDate(this.start);
    const endDate = this.end === null ? null : mapDateToUTCDate(this.end);
    return new DateRange(startDate, endDate);
  }
}
