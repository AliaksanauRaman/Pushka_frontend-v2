export const checkIsDateEarlierThan = (date1: Date, date2: Date): boolean => {
  return (
    checkIsDateYearLess(date1, date2) ||
    checkIsDateMonthLess(date1, date2) ||
    checkIsDateNumberLess(date1, date2)
  );
};

function checkIsDateYearLess(date1: Date, date2: Date): boolean {
  return date1.getFullYear() < date2.getFullYear();
}

function checkIsDateMonthLess(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() < date2.getMonth()
  );
}

function checkIsDateNumberLess(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() < date2.getDate()
  );
}
