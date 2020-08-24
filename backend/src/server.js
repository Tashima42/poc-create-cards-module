const Koa = require('koa')
const app = new Koa()
const cors = require('@koa/cors')
const db = require('./db')

app.use(cors())

const router = require('./routes')
app.use(router.routes())

app.listen(3000)