import ASCII, { EType } from '../index';
import { data, ITestTransmission } from "../data";

describe('ASCII', () => {
    data.map((t: ITestTransmission) => {
        describe(`"${t.payload.type}" transmission`, () => {
            const transmission: ASCII = new ASCII(t.transmission, {
                startTag: {
                    position: 1,
                    match: "*"
                },
                endTag: {
                    position: -1,
                    match: "#"
                }
            });

            if (transmission.type === EType.GPS)
                console.log('Transmission: ', transmission.data);


            test(`Supplier name should be "${t.payload.supplier}"`, () => {
                expect(transmission.supplier).toEqual(t.payload.supplier);
            });

            test(`Device IMEI should be "${t.payload.imei}"`, () => {
                expect(transmission.imei).toEqual(t.payload.imei);
            });

            test(`Transmission type should be "${t.payload.type}"`, () => {
                expect(transmission.type).toEqual(t.payload.type);
            });

            if (t.payload.data)
                describe("Transmission payload data", () => {
                    test(`Time should be ${t.payload.data?.time}`, () => {
                        expect(transmission.data?.time).toEqual(t.payload.data?.time);
                    });

                    test(`Validity should be ${t.payload.data?.validity}`, () => {
                        expect(transmission.data?.validity).toEqual(t.payload.data?.validity);
                    });

                    test(`Latitude should be ${t.payload.data?.latitude}`, () => {
                        expect(transmission.data?.latitude).toEqual(t.payload.data?.latitude);
                    });

                    test(`Latitude direction should be ${t.payload.data?.latitudeDirection}`, () => {
                        expect(transmission.data?.latitudeDirection).toEqual(t.payload.data?.latitudeDirection);
                    });

                    test(`Longitude should be ${t.payload.data?.longitude}`, () => {
                        expect(transmission.data?.longitude).toEqual(t.payload.data?.longitude);
                    });

                    test(`Longitude direction should be ${t.payload.data?.longitudeDirection}`, () => {
                        expect(transmission.data?.longitudeDirection).toEqual(t.payload.data?.longitudeDirection);
                    });

                    test(`Speed should be ${t.payload.data?.speed}`, () => {
                        expect(transmission.data?.speed).toEqual(t.payload.data?.speed);
                    });

                    test(`Direction should be ${t.payload.data?.direction}`, () => {
                        expect(transmission.data?.direction).toEqual(t.payload.data?.direction);
                    });

                    test(`Date should be ${t.payload.data?.date}`, () => {
                        expect(transmission.data?.date).toEqual(t.payload.data?.date);
                    });
                });
        });
    });
});