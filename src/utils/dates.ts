/* eslint-disable import/prefer-default-export */
export function getDateOnly(date: Date): Date {
  const res = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return res;
}

export function firstDayOfYear(date: Date): Date {
  const res = new Date(date.getFullYear(), 0, 1);
  return res;
}

export function lastDayOfYear(date: Date): Date {
  const res = new Date(date.getFullYear(), 11, 31);
  return res;
}

export function firstDayOfMonth(date: Date | MonthYear): Date {
  const monthYear: MonthYear = date as MonthYear;
  if (date instanceof Date) {
    monthYear.month = (date as Date).getMonth();
    monthYear.year = (date as Date).getFullYear();
  }

  const res = new Date(monthYear.year, monthYear.month, 1);
  return res;
}

type MonthYear = {
  month: number;
  year: number;
};

export function lastDayOfMonth(date: Date | MonthYear): Date {
  const monthYear: MonthYear = date as MonthYear;
  if (date instanceof Date) {
    monthYear.month = (date as Date).getMonth();
    monthYear.year = (date as Date).getFullYear();
  }

  const days = daysInMonth(monthYear);

  const res = new Date(monthYear.year, monthYear.month, days);
  return res;
}

export function daysInMonth(date: Date | MonthYear): number {
  const monthYear: MonthYear = date as MonthYear;
  if (date instanceof Date) {
    monthYear.month = (date as Date).getMonth();
    monthYear.year = (date as Date).getFullYear();
  }

  const days = new Date(monthYear.year, monthYear.month + 1, 0).getDate();
  return days;
}
