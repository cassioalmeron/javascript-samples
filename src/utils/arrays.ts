/* eslint-disable import/prefer-default-export */
export function distinct(value: any, index: number, self: any[]): boolean {
  return self.indexOf(value) === index;
}

export function subdivide(array: any[], maxPerArray: number): any[][] {
  
  const result: any[][] = [];
  let v: any[] = [];

  for (let i = 0; i < array.length; i++){
    if (i % maxPerArray === 0 && v.length > 0)
    {
      result.push(v);
      v = [];
    }

    v.push(array[i]);
  }

  if (v.length > 0)
    result.push(v);
  
  return result;
}