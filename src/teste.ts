import {removeWhiteSpacesRecursive} from './removeWhiteSpacesRecursive'

type T = {
    name: string;
    age: number;
    address: {
        street: string,
        number: number
    }
}

let obj = {
    name: "  Cássio    Almeron    ",
    age: 37,
    address: {
        street: "  Abel  Esteves   Aguiar ",
        number: 283
    }
} as T;

obj = removeWhiteSpacesRecursive(obj) as T;

console.log(obj);