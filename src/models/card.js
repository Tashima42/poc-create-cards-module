const mongoose = require('mongoose')
const Joi = require('joi')
const joigoose = require('joigoose')(mongoose)


//Esquema de card para o mongoose
const cardJoiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  front: Joi.string().min(3).max(100).required(),
  back: Joi.string().min(3).max(100).required(),
  created: Joi.date().default(Date.now),
  lastUpated: Joi.date().default(Date.now),
  deleted: Joi.boolean().default(false)
})

const cardMongooseSchema = new mongoose.Schema(joigoose.convert(cardJoiSchema))

module.exports = mongoose.model('mycards', cardMongooseSchema)