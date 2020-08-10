const mongoose = require('mongoose')
const Schema = mongoose.Schema
const server = require('./server')

const dbConfig = {
    url: 'mongodb://localhost:27017/cards',
    user: '',
    password: '',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

//Conectar o mongoose ao mongo
const connectDb = async () => {
    try {
        await mongoose.connect(dbConfig.url, dbConfig.options)

        console.info("Connected to MongoDB")
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err}`)
        process.exit(1)
    }
}

connectDb()

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


const createNewCard = async (cardObject) => {
    try {
        await new cardModel(cardObject).save()
        console.info(`Create card ${cardObject.front}`)
    } catch (err) {
        console.error(`Error creating card: ${err}`)
    }

}

exports.createNewCard = createNewCard