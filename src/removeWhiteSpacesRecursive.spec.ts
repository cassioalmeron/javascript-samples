import { removeWhiteSpacesRecursive } from "./removeWhiteSpacesRecursive";

type MyType = {
    name: string;
    age: number;
    address: {
        street: string,
        number: number
    }
}

describe('removeWhiteSpacesRecursive', () => {
    it('must to work', async () => {
        const originalObject = {
            name: '  Cássio    Almeron    ',
            age: 37,
            address: {
                street: '  Twenty  Fifth   Street   ',
                number: 123
            }
        } as MyType;

        const removedWhitsSpacesObject = removeWhiteSpacesRecursive(originalObject);
        
        expect(removedWhitsSpacesObject).toEqual(
            expect.objectContaining({
                name: 'Cássio Almeron',
                age: 37,
                address: {
                    street: 'Twenty Fifth Street',
                    number: 123
                }
            }),
          );
      });
})