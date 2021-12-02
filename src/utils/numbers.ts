import { fillLeft } from './strings';

export default function fillWithZerosLeft(num: number, length: number): string {
  return fillLeft(num.toString(), length, '0');
}
