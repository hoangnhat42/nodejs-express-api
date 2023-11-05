import createError from "http-errors";

export const badRequest = (err, res) => {
    const error = createError.BadRequest(err);
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}

export const internalServerError = (err, res) => {
    const error = createError.InternalServerError(err);
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}