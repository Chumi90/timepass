const validatorMiddleware = (req, res, next) => {
    const HOURACCES=12;
    if (req.hours>=HOURACCES){
        req.validation=true; 
    }else{
        req.validation=false;
        res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`;
        //return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
}

module.exports=validatorMiddleware;