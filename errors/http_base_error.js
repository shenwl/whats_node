class HttpBaseError extends Error {
    constructor(httpStatusCode, httpMsg, errorCode, msg) {
        super(`HTTP ERROR: ${msg}`)
        this.httpStatusCode = httpStatusCode
        this.httpMsg = httpMsg
        this.errorCode = errorCode
        this.msg = msg
    }
}

module.exports = HttpBaseError

try {
    throw new HttpBaseError(404, 'Not Found', -1, '资源不存在')
} catch(e) {
    console.log(e.message)
    console.log(e.httpStatusCode)
    console.log(e.httpMsg)
}