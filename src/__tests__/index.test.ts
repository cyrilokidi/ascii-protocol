import ASCII from '../index';
import { data, ITestData } from "../data";

describe('ASCII', () => {
    data.map((d: ITestData, i: number) => {
        describe(`[${d.type}] sample data ${i + 1}`, () => {
            const ascii = new ASCII(d.ascii);

            test('Supplier name', () => {
                expect(ascii.supplier).toEqual(d.supplier);
            });

            test('Device IMEI', () => {
                expect(ascii.imei).toEqual(d.imei);
            });

            test('Transmission type', () => {
                expect(ascii.type).toEqual(d.type);
            });

            test('Heartbeat response', () => {
                expect(ascii.heartbeat).toEqual(d.heartbeat);
            });
        });
    });
});