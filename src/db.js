const mongoose = require('mongoose')
const server = require('./server')
const cardModels = require('./models/card')

const dbConfig = {
    url: `mongodb://localhost:27017/${process.env.COLLECTION}`,
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

        console.info(`Connected to MongoDB on: ${dbConfig.url}`)
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