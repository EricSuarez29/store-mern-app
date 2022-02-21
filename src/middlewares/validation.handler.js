export function validationHandler(err, req, res, next){
    if(err.errors){
        res.status(400).json(err.errors);
    }
    next(err);
}