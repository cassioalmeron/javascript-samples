/* eslint-disable import/prefer-default-export */
export function getDateOnly(date: Date): Date {
  const res = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return res;
}

export function firstDayOfYear(date: Date): Date {
  const res = new Date(
    date.getFullYear(), 0, 1
  );
  return res;
}

export function lastDayOfYear(date: Date): Date {
  const res = new Date(
    date.getFullYear(), 11, 31
  );
  return res;
}

export function firstDayOfMonth(date: Date): Date {
  const res = new Date(
    date.getFullYear(), date.getMonth(), 1
  );
  return res;
}

export function lastDayOfMonth(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const res = new Date(
    date.getFullYear(), month, daysInMonth
  );
  return res;
}

export function daysInMonth(date: Date): number{
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return daysInMonth;
}