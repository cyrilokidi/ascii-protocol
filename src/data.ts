export interface ITestData {
    ascii: string;
    supplier: string;
    imei: string;
}

export const data: ITestData[] = [
    // {
    //     ascii: "*HQ,865205030330012,V4,S2,150950,151007,A,2240.55503,N,11358.35174,E,0.85,0,100815, FFFFFBFF #"
    // },
    {
        ascii: "*HQ,135790246811220,HTBT#",
        supplier: "*HQ",
        imei: "135790246811220"
    }
];