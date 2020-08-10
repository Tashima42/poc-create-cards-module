const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Esquema de card para o mongoose
const cardSchema = new Schema({
  name: {
    type: String,
    require: true
  },
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
const cardBaseModel = mongoose.model('mycards', cardSchema)

exports.cardBaseModel = cardBaseModel