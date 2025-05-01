const validatorMiddleware = (req, res, next) => {
    const HOURACCES=20;
    if (req.hours>=HOURACCES){
        req.validation=true; 
    }else{
        req.validation=false;
    }
    next();
}

module.exports=validatorMiddleware;