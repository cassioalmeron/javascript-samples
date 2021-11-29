/* eslint-disable import/prefer-default-export */
export function getDateOnly(date: Date): Date {
  const res = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return res;
}
