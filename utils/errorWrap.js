const errorWrap = (fn) => {
    return function (req, res, next) {
        try {
            fn(req, res, next)
        } catch (e) {
            console.error(e)
            next(e)
        }
    }
}

module.exports = errorWrap