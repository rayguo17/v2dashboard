const crypto = require("crypto")
let createUser = function (email) {
    return {
        email: email,
        uuid: crypto.randomUUID(),
        enable: true,
        alter_id: 0,

    }
}

module.exports = { createUser }