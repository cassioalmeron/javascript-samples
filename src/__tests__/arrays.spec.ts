import { subdivide } from "../utils/arrays";

describe('arrays', () => {
    it('Subdivide array with non divisible length (1)', async () => {
        const array: number[] = [1,2,3,4,5];
        const v = subdivide(array, 3);

        expect(v.length).toBe(2);

        expect(v[0].length).toBe(3);
        expect(v[0]).toStrictEqual([1, 2, 3]);
        
        expect(v[1].length).toBe(2);
        expect(v[1]).toStrictEqual([4, 5]);
    });

    it('Subdivide array with non divisible length (2)', async () => {
        const array: number[] = [1,2,3,4,5];
        const v = subdivide(array, 2);

        expect(v.length).toBe(3);

        expect(v[0].length).toBe(2);
        expect(v[0]).toStrictEqual([1, 2]);
        
        expect(v[1].length).toBe(2);
        expect(v[1]).toStrictEqual([3, 4]);

        expect(v[2].length).toBe(1);
        expect(v[2]).toStrictEqual([5]);
    });

    it('Subdivide array with divisible length', async () => {
        const array: number[] = [1,2,3,4,5, 6];
        const v = subdivide(array, 3);

        expect(v.length).toBe(2);

        expect(v[0].length).toBe(3);
        expect(v[0]).toStrictEqual([1, 2, 3]);
        
        expect(v[1].length).toBe(3);
        expect(v[1]).toStrictEqual([4, 5, 6]);
    });

    it('Subdivide array with length less than divider', async () => {
        const array: number[] = [1,2,3,4,5, 6];
        const v = subdivide(array, 8);

        expect(v.length).toBe(1);

        expect(v[0].length).toBe(6);
        expect(v[0]).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
})