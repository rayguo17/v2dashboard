
let errorMsg = (msg, status) => {
    return {
        msg: msg,
        code: status
    }
}

module.exports = { errorMsg }