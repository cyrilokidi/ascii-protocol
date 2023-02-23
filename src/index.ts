export enum ECmd {
    ["HTBT"] = "HTBT",
}

export enum EType {
    ["HEART_BEAT"] = "HEART_BEAT"
}

export interface IProps {
    supplierName: string;
    imei: string;
    cmd: ECmd;
}

export default class ASCII {
    private readonly start = '*';
    private readonly end = '#';
    private readonly d: string;

    constructor(readonly data: string) {
        this.d = data;
    }

    private get props(): IProps {
        const _: string[] = this.d.split(',');
        const props: IProps = {
            supplierName: _[0],
            imei: _[1],
            cmd: _[2] as ECmd,
        };

        return props;
    }

    public get supplier(): string {
        return this.props.supplierName.slice(1);
    }

    public get imei(): string {
        return this.props.imei;
    }

    private get cmd(): ECmd {
        return this.props.cmd.slice(0, -1) as ECmd;
    }

    public get type(): EType {
        const cmd: ECmd = this.cmd;

        switch (cmd) {
            case ECmd.HTBT:
                return EType.HEART_BEAT;

            default:
                throw new Error(`Invalid command ${cmd}`);
        }
    }

    public get heartbeat(): string {
        if (this.cmd !== ECmd.HTBT)
            throw new Error('Not a heartbeat transmission');
        return `${this.start}${this.supplier},${this.imei},${this.cmd}${this.end}`;
    }
}