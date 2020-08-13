const koaBody = require('koa-body')
const koaRouter = require('koa-router')
const services = require('./services')
const router = new koaRouter()

router.post('/card', koaBody(), (ctx) => {
  const requestBody = ctx.request.body
  ctx.body = requestBody
  services.postCreateCard(requestBody)
})

router.get('/card', async (ctx) => {
  ctx.body = await services.getAllCards(parseInt(ctx.query.limit), ctx.query.initialdate, ctx.query.enddate)
})

router.get('/card/one', async (ctx) => {
  ctx.body = await services.getCardById(ctx.query.id)
})

router.delete('/card/one', async (ctx) => {
  ctx.body = await services.deleteCardById(ctx.query.id)
})

router.get('/card/:id', async (ctx) => {
  ctx.body = await services.getCardById(ctx.params.id)
})

router.delete('/card/:id', async (ctx) => {
  ctx.body = await services.deleteCardById(ctx.params.id)
})

module.exports = router