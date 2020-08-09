const koaServer = require('./server')
const mongoose = require('mongoose')
const { cardRequestObject } = require('./server')
const Schema = mongoose.Schema

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
const cardModel = mongoose.model('mycards', cardSchema)


const createNewCard = (cardObject) => {
    const cardJSON = JSON.stringify(cardObject)
    new cardModel(cardObject)
        .save()
        .then(() => console.log(`Create card ${cardObject.front}}`))
        .catch(err => console.error(`Error creating card: ${err}`))
    
}

exports.createNewCard = createNewCard