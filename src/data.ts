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
    }
];