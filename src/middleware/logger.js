function logger(req, res, next){
    console.log(req.method, req.path, 'i hate my life');
    next();
}
module.exports = logger;    