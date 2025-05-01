const dateMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;//Formato de horas minutos y segundos
    req.dateType = `${formattedTime} h.`; //sacamos los datos para enviarlos a las diferentes webs
    req.hours=hours;
    next();
  };

  module.exports=dateMiddleware;