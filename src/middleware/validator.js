function validator(req, res, next) {
    const regex = /^\s*$/;
    if (!req.query.name||!req.query.name.length||req.query.name===''||regex.test(req.query.name)) {
        next('name is required');
    } else {
        next();
    }
}
module.exports = validator;