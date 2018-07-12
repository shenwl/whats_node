const HttpBaseError = require('../errors/http_base_error')

function handler() {
    return function(err, req, res, next) {
        if(err instanceof HttpBaseError) {
            console.log(err)
            res.statusCode = err.httpStatusCode
            res.json({
                code: err.errCode,
                msg: err.httpMsg,
            })
        } else {
            next(err)
        }
    }
}

module.exports = handler