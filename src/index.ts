export interface IProps {
    supplierName: string;
    imei: string;
    cmd: string;
    time: string;
    params: string[]
}

export default class ASCII {
    private readonly d: string;

    constructor(readonly data: string) {
        this.d = data;
    }

    private get props(): IProps {
        const _: string[] = this.d.split(',');
        return {
            supplierName: _[0],
            imei: _[1],
            cmd: _[2],
            time: _[3],
            params: _.slice(4, -1)
        } as IProps;
    }

    public get supplier(): string {
        return this.props.supplierName
    }

    public get imei(): string {
        return this.props.imei;
    }
}