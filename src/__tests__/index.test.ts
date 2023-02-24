import ASCII from '../index';
import { data, ITestTransmission } from "../data";

describe('ASCII', () => {
    data.map((t: ITestTransmission) => {
        describe(`"${t.data.type}" transmission`, () => {
            const transmission: ASCII = new ASCII(t.transmission);

            test(`Supplier name should be "${t.data.supplier}"`, () => {
                expect(transmission.supplier).toEqual(t.data.supplier);
            });

            test(`Device IMEI should be "${t.data.imei}"`, () => {
                expect(transmission.imei).toEqual(t.data.imei);
            });

            test(`Transmission type should be "${t.data.type}"`, () => {
                expect(transmission.type).toEqual(t.data.type);
            });
        });
    });
});