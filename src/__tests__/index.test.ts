import ASCII from '../index';
import { data, ITestData } from "../data";

describe('ASCII', () => {
    data.map((d: ITestData, i: number) => {
        describe(`Sample data ${i + 1}`, () => {
            const ascii = new ASCII(d.ascii);
        });
    });
});