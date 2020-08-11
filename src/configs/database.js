const mongoose = require('mongoose')

// Configurações para a conexão como o mongoDB
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