// Configurações para a conexão como o mongoDB
const dbConfig = {
    uri: process.env.CONNECTION || 'mongodb://localhost:27017/cards',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}
exports.dbConfig = dbConfig