import { daysInMonth, firstDayOfMonth, firstDayOfYear, lastDayOfMonth, lastDayOfYear } from "../utils/dates";

describe('dates', () => {
    it('firstDayOfYear: 2021-05-23', async () => {
        const date = new Date(2021, 4, 23);
        const first = firstDayOfYear(date);

        expect(first.getDate()).toBe(1);
        expect(first.getMonth()).toBe(0);
        expect(first.getFullYear()).toBe(2021);
    });

    it('lastDayOfYear: 2021-05-23', async () => {
        const date = new Date(2021, 4, 23);
        const last = lastDayOfYear(date);

        expect(last.getDate()).toBe(31);
        expect(last.getMonth()).toBe(11);
        expect(last.getFullYear()).toBe(2021);
    });

    it('firstDayOfMonth: 2021-05-23', async () => {
        const date = new Date(2021, 4, 23);
        const first = firstDayOfMonth(date);

        expect(first.getDate()).toBe(1);
        expect(first.getMonth()).toBe(4);
        expect(first.getFullYear()).toBe(2021);
    });

    it('lastDayOfMonth: 2021-05-23', async () => {
        const date = new Date(2021, 4, 23);
        const last = lastDayOfMonth(date);

        expect(last.getDate()).toBe(31);
        expect(last.getMonth()).toBe(4);
        expect(last.getFullYear()).toBe(2021);
    })

    it('daysInMonth: 2020-05-23', async () => {
        const date = new Date(2020, 1, 23);
        const days = daysInMonth(date);

        expect(days).toBe(29);
    })
    
    it('daysInMonth: 2021-05-23', async () => {
        const date = new Date(2021, 1, 23);
        const days = daysInMonth(date);

        expect(days).toBe(28);
    })
    
    it('daysInMonth: 2021-05-23', async () => {
        const date = new Date(2021, 4, 23);
        const days = daysInMonth(date);

        expect(days).toBe(31);
    })

    it('daysInMonth: 2021-06-23', async () => {
        const date = new Date(2021, 5, 23);
        const days = daysInMonth(date);

        expect(days).toBe(30);
    })

    it('daysInMonth: 2021-07-23', async () => {
        const date = new Date(2021, 6, 23);
        const days = daysInMonth(date);

        expect(days).toBe(31);
    })

    it('daysInMonth: 2021-08-23', async () => {
        const date = new Date(2021, 7, 23);
        const days = daysInMonth(date);

        expect(days).toBe(31);
    })

    it('daysInMonth: 2021-09-23', async () => {
        const date = new Date(2021, 8, 23);
        const days = daysInMonth(date);

        expect(days).toBe(30);
    })
})