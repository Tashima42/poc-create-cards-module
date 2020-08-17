const Koa = require('koa')
const app = new Koa()
const router = require('./routes')
const db = require('./db')

app.use(router.routes())
app.listen(3000)