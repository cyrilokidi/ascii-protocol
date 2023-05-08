export class ASCIIProtocolError extends Error {
    date: Date;

    constructor(message: string, ...params: any) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ASCIIProtocolError);
        }

        this.name = 'ASCIIProtocolError';
        this.date = new Date();
        this.message = message;
    }
}