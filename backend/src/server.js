const Koa = require('koa')
const app = new Koa()
const cors = require('@koa/cors')
const db = require('./db')

app.use((ctx, next) => {
  ctx.header("Access-Control-Allow-Origin", "*");
  ctx.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

const router = require('./routes')
app.use(router.routes())


app.listen(3000)