import { EType } from ".";

export interface ITestTransmissionData {
    supplier: string;
    imei: string;
    type: EType;
}

export interface ITestTransmission {
    transmission: string;
    data: ITestTransmissionData;
}

export const data: ITestTransmission[] = [
    {
        transmission: "*HQ,135790246811220,HTBT#",
        data: {
            supplier: "HQ",
            imei: "135790246811220",
            type: EType.HEART_BEAT
        }
    },
    {
        transmission: "*HQ,135790246811220,V0#",
        data: {
            supplier: "HQ",
            imei: "135790246811220",
            type: EType.LOGIN
        }
    },
    {
        transmission: "*HQ,865205030330012,V1,145452,A,2240.55181,N,11358.32389,E,0.00,0,100815,FFFFFBFF#",
        data: {
            supplier: "HQ",
            imei: "865205030330012",
            type: EType.GPS
        }
    }
];