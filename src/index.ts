import { ASCIIProtocolError } from "./ascii-protocol.error";

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

export enum EDataValidity {
    ['VALID'] = 'VALID',
    ['INVALID'] = 'INVALID',
    ['BVALID'] = 'BVALID'
}

export interface IGPSData {
    time: string;
    validity: EDataValidity;
    latitude: number;
    latitudeDirection: 'N' | 'S';
    longitude: number;
    longitudeDirection: 'E' | 'W';
    speed: number;
    direction: 0 | 1;
    date: string;
    general: string;
}

export interface IStartTagOptions {
    position: number;
    match: string;
}

export interface IEndTagOptions {
    position: number;
    match: string;
}

export interface IASCIIProtocolOptions {
    startTag?: IStartTagOptions;
    endTag?: IEndTagOptions;
}

/**
 * ASCII protocol parser.
 */
export default class ASCII {
    private readonly p: string;

    constructor(readonly payload: string, options?: IASCIIProtocolOptions) {
        this.p = payload;

        if (options?.startTag) {
            if (options.startTag.position < 0)
                throw new ASCIIProtocolError("Start tag cannot be a negative number.");
            const startTag: string = this.p.slice(0, options.startTag.position)
            if (startTag !== options.startTag.match)
                throw new ASCIIProtocolError(`Start tag do not match "${options.startTag.match}"`);
            this.p = this.p.slice(options.startTag.position);

            if (options?.endTag) {
                if (options.endTag.position > -1)
                    throw new ASCIIProtocolError("End tag cannot be a positive number.");
                const endTag: string = this.p.slice(options.endTag.position)
                if (endTag !== options.endTag.match)
                    throw new ASCIIProtocolError(`End tag do not match "${options.endTag.match}"`);
                this.p = this.p.slice(0, options.endTag.position);
            }
        }
    }

    private get props(): IProps {
        const [supplierName, imei, cmd]: string[] = this.p.split(',');

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

    public get type(): EType | null {
        const cmd: ECmd = this.props.cmd as ECmd;

        switch (cmd) {
            case ECmd.HTBT:
                return EType.HEART_BEAT;

            case ECmd.V0:
                return EType.LOGIN;

            case ECmd.V1:
                return EType.GPS;

            default:
                return null;
        }
    }

    public get data(): IGPSData {
        const cmd: ECmd = this.props.cmd as ECmd;

        switch (cmd) {
            case ECmd.V1:
                const d: string[] = this.p.split(',').slice(3);

                const time: string = d[0];
                const validity: EDataValidity = d[1] as EDataValidity;
                const latitude: number = Number(d[2]);
                const latitudeDirection: 'N' | 'S' = d[3] as 'N' | 'S';
                const longitude: number = Number(d[4]);
                const longitudeDirection: 'E' | 'W' = d[5] as 'E' | 'W';
                const speed: number = Number(d[6]);
                const direction: 0 | 1 = Number(d[7]) as 0 | 1;
                const date: string = d[8];
                const general: string = d[9];

                const result: IGPSData = {
                    time,
                    validity,
                    latitude,
                    latitudeDirection,
                    longitude,
                    longitudeDirection,
                    speed,
                    direction,
                    date,
                    general,
                }

                return result;

            default:
                throw new ASCIIProtocolError('Invalid command.');
        }
    }
}