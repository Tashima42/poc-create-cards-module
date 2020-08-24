// Configurações para a conexão como o mongoDB
const dbConfig = {
    uri: process.env.CONNECTION,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}
exports.dbConfig = dbConfig