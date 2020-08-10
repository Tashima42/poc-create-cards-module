const Koa = require('koa')
const koaRouter = require('koa-router')
const koaBody = require('koa-body')
const createCardDB = require('./db')

const app = new Koa()
const router = new koaRouter()


const createCardRequest = router.post('/card', koaBody(),
    (ctx) => {
        const receivedRequestBody = ctx.request.body
        ctx.body = ctx.request.body
        createCardDB.createNewCard(receivedRequestBody)
    })

app.use(router.routes())

app.listen(3000)