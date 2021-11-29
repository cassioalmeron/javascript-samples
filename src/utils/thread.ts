/* eslint-disable import/prefer-default-export */
export function sleep(time: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, time));
}
