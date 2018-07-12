const HttpBaseError = require('./http_base_error')

const ERROR_CODE = 5000000;

class InternalServerError extends HttpBaseError {
    constructor(msg) {
        super(500, '服务器好像开小差了'， ERROR_CODE, `something wrong: ${msg}`)
    }
}

module.exports = InternalServerError