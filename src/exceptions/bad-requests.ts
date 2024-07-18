import { ErroCodes, HttpException } from "./rootexceptions";

export class BadRequestsException extends HttpException {
        constructor(message: string, errorCode:ErroCodes) {
            super(message, errorCode, 400, null);
        }
}