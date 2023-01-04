export const responseSuccess = (data, code = 200, message) => {
    return {
        data,
        code,
        message,
    }
}


export const responseFail = (err, message, code = 1000) => {
    return {
        err,
        code,
        message,
    }
}