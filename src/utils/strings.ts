  export function replaceAll(
    string: string,
    search: string,
    replace: string,
  ): string {
    return string.split(search).join(replace);
  }
  
  export function removeWhiteSpaces(string: string): string {
    let str = string;
    while (str.indexOf('  ') >= 0) str = string.split('  ').join(' ');
    return str;
  }
  
  export function removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  
  export function fillLeft(str: string, length: number, char: string): string {
    return `${`${char}${str}`.slice(-length)}`;
  }
  