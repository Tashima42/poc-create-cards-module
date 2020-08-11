const koaBody = require('koa-body')
const koaRouter = require('koa-router')
const services = require('./services')
const router = new koaRouter()

router.post('/card', koaBody(), (ctx) => {
  const requestBody = ctx.request.body
  ctx.body = requestBody
  services.createCardRequest(requestBody)
})

module.exports = router