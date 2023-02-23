export enum ECmd {
    ["HTBT"] = "HTBT",
    ["V0"] = "V0"
}

export enum EType {
    ["HEART_BEAT"] = "HEART_BEAT",
    ["LOGIN"] = "LOGIN",
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

            case ECmd.V0:
                return EType.LOGIN;

            default:
                throw new Error(`Invalid command ${cmd}`);
        }
    }
}