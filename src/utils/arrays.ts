/* eslint-disable import/prefer-default-export */
export function distinct(value: any, index: number, self: any[]): boolean {
  return self.indexOf(value) === index;
}