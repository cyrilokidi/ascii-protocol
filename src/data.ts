import { EDataValidity, EType, IGPSData } from ".";

export type TTestTransmissionPayloadData = IGPSData;

export interface ITestTransmissionPayload {
    supplier: string;
    imei: string;
    type: EType;
    data?: TTestTransmissionPayloadData;
}

export interface ITestTransmission {
    transmission: string;
    payload: ITestTransmissionPayload;
}

export const data: ITestTransmission[] = [
    {
        transmission: "*HQ,135790246811220,HTBT#",
        payload: {
            supplier: "HQ",
            imei: "135790246811220",
            type: EType.HEART_BEAT
        }
    },
    {
        transmission: "*HQ,135790246811220,V0#",
        payload: {
            supplier: "HQ",
            imei: "135790246811220",
            type: EType.LOGIN
        }
    },
    {
        transmission: "*HQ,865205030330012,V1,145452,A,2240.55181,N,11358.32389,E,0.00,0,100815,FFFFFBFF#",
        payload: {
            supplier: "HQ",
            imei: "865205030330012",
            type: EType.GPS,
            data: {
                time: "145452",
                validity: "A" as EDataValidity,
                latitude: 2240.55181,
                latitudeDirection: "N",
                longitude: 11358.32389,
                longitudeDirection: "E",
                speed: 0,
                direction: 0,
                date: "100815",
                general: "FFFFFBFF"
            }
        }
    }
];