const Koa = require('koa')
const koaRouter = require('koa-router')
const koaBody = require('koa-body')
const mongoose = require('mongoose')

const app = new Koa()
const router = new koaRouter()
const Schema = mongoose.Schema

let cardReceivedRequest = {}

mongoose.Promise = global.Promise

//Conectar o mongoose ao mongo
    mongoose.connect('mongodb://localhost:27017/cards', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB!'))
        .catch(err => console.error(`Error connecting to MongoDB: ${err}`))

//Esquema de card para o mongoose
    const cardSchema = new Schema({
        front: {
            type: String,
            require: true
        },
        back: {
            type: String,
            require: true
        }
    })

//Definindo um modelo usando o esquema do card
const cardModel = mongoose.model('cards', cardSchema)


const createNewCard = (cardObject) => {
    const cardJSON = JSON.stringify(cardObject)
    new cardModel(cardObject)
        .save()
        .then(() => console.log(`Create card ${cardObject.front}}`))
        .catch(err => console.error(`Error creating card: ${err}`))
    
}

//Rota do koa router para receber infos do card e tratar com o koa body
router.post('/card', koaBody(), 
    (ctx) => {
        cardReceivedRequest = ctx.request.body
        createNewCard(cardReceivedRequest)
        ctx.body = ctx.request.body
})


app.use(router.routes())

app.listen(3000, () => console.log(`Listening on port https://localhost:3000`))