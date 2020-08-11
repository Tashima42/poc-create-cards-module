const mongoose = require('mongoose')
const configs = require('./configs/database')

//Conectar o mongoose ao mongo
const connectDb = async () => {
  try {
    await mongoose.connect(configs.dbConfig.uri, configs.dbConfig.options)

    console.info(`Connected to MongoDB on: ${configs.dbConfig.uri}`)
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`)
    process.exit(1)
  }
}
connectDb()