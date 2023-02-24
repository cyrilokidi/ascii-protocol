export enum ECmd {
    ["HTBT"] = "HTBT",
    ["V0"] = "V0",
    ["V1"] = "V1",
}

export enum EType {
    ["HEART_BEAT"] = "HEART_BEAT",
    ["LOGIN"] = "LOGIN",
    ["GPS"] = "GPS"
}

export interface IProps {
    supplierName: string;
    imei: string;
    cmd: ECmd;
}

/**
 * ASCII protocol parser.
 */
export default class ASCII {
    private readonly startTag = "*";
    private readonly endTag = "#";
    private readonly d: string;

    constructor(readonly data: string) {
        this.d = data;
        const startTag: string = this.d[0];
        if (startTag !== this.startTag)
            throw new Error(`Invalid start tag "${startTag}"`);
        const endTag: string = this.d[this.d.length - 1];
        if (endTag !== this.endTag)
            throw new Error(`Invalid end tag "${endTag}"`)
        this.d = this.d.slice(1);
        this.d = this.d.slice(0, -1);
    }

    private get props(): IProps {
        const [supplierName, imei, cmd]: string[] = this.d.split(',');

        return {
            supplierName,
            imei,
            cmd: cmd as ECmd,
        } as IProps;
    }

    public get supplier(): string {
        return this.props.supplierName;
    }

    public get imei(): string {
        return this.props.imei;
    }

    public get type(): EType {
        const cmd: ECmd = this.props.cmd as ECmd;

        switch (cmd) {
            case ECmd.HTBT:
                return EType.HEART_BEAT;

            case ECmd.V0:
                return EType.LOGIN;

            case ECmd.V1:
                return EType.GPS;

            default:
                throw new Error(`Invalid command ${cmd}`);
        }
    }
}