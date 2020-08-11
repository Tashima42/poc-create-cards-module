const mongoose = require('mongoose')
const cardModels = require('./models/card')

const dbConfig = {
    uri: process.env.CONNECTION || 'mongodb://localhost:27017/cards',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

//Conectar o mongoose ao mongo
const connectDb = async () => {
    try {
        await mongoose.connect(dbConfig.uri, dbConfig.options)

        console.info(`Connected to MongoDB on: ${dbConfig.uri}`)
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err}`)
        process.exit(1)
    }
}
connectDb()

// Cria um novo card na DB
const createNewCard = async (cardObject) => {
    try {
        await new cardModels.cardBaseModel(cardObject).save()
        console.info(`Create card ${cardObject.name}`)
    } catch (err) {
        console.error(`Error creating card: ${err}`)
    }

}

exports.createNewCard = createNewCard