const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { development } = require('./knexfile')
const knex = require('knex')(development)
const apiAuth = require('./apiAuth')
const { auth } = require('./auth')
const authClass = auth()
const V2scarRouter = require('./router/v2scarRouter')
const AdminRouter = require('./router/adminRouter')
const UserRouter = require('./router/userRouter')

const V2scarService = require('./service/v2scarService')
const AdminService = require('./service/adminService')
const UserService = require('./service/userService')

const app = express()
const server = require('http').Server(app)

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(authClass.initialize())

app.get('/ping', (req, res) => {
    res.send('pong')
})


app.use('/api/admin', new AdminRouter(new AdminService(knex)).router())
app.use('/api/user', authClass.adminAuthenticate(), new UserRouter(new UserService(knex)).router())
app.use('/api/v2scar', apiAuth, new V2scarRouter(new V2scarService(knex)).router())



server.listen(8001, () => {
    console.log('server running on port 8001...')
})
