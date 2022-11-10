const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtraJwt = passportJWT.ExtractJwt
const adminId = "iamadmin"

let auth = () => {
    const strategy = new passportJWT.Strategy({
        secretOrKey: "supersecret",
        jwtFromRequest: ExtraJwt.fromAuthHeaderAsBearerToken()
    }, async (payload, done) => {
        //console.log(payload)
        if (payload.id === adminId) {
            return done(null, { id: adminId })
        } else {
            return done(new Error('User Not Found!'), null)
        }
    })
    passport.use(strategy)
    return {
        initialize: function () {
            return passport.initialize()
        },
        adminAuthenticate: function () {
            return passport.authenticate('jwt', { session: false })
        },
        sideCarAuthenticate: function () {

        }
    }
}
module.exports = {
    auth, adminId
}