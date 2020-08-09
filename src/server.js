const Koa = require('koa')
const koaRouter = require('koa-router')
const koaBody = require('koa-body')
const createCardDB = require('./db')

const app = new Koa()
const router = new koaRouter()


const createCardRequest = router.post('/card', koaBody(),
    (ctx) => {
        const cardReceivedRequest = ctx.request.body
        ctx.body = ctx.request.body
        createCardDB.createNewCard(cardReceivedRequest)
    })

app.use(router.routes())

app.listen(3000)

module.exports = {  }