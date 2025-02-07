//message, status code, error codes, error


export class HttpException extends Error {

    message: string;
    errorCode: any;
    statusCode: number;
    errors:ErroCodes;



    constructor(  message: string, errorCode: ErroCodes, statusCode: number, errors:any){
        super(message);
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.errors = errors
    }
}

export enum ErroCodes {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS = 1002,
    INCORRECT_PASSWORD= 1003,
}