import { HttpException } from "../exceptions/rootexceptions";
import { Request, Response, NextFunction } from "express";


export const errorMiddleware = (error:HttpException, req: Request, res: Response, next: NextFunction ) => {
    res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
        errors:error.errors
    })
}