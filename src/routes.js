const Koa = require('koa')
const koaBody = require('koa-body')
const koaRouter = require('koa-router')
const createCardDB = require('./db')

const router = new koaRouter()

const createCardRequest = (ctx) => {
  const receivedRequestBody = ctx.request.body
  createCardDB.createNewCard(receivedRequestBody)
  ctx.body = ctx.request.body
}

router.post('/card', koaBody(), createCardRequest)
router.get('/card', (ctx) => {
  ctx.body = 'Hey amigo'
})

module.exports = router