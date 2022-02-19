import { ValidationError } from "express-validation"

export function validatorHandler(err, req, res, next){
    if(err instanceof ValidationError){
        res.status(err.statusCode).json(err);
    }
    res.status(500).json(err);
}