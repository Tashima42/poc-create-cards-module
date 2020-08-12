const cardModels = require('./models/card')
const mongoose = require('mongoose')
const card = require('./models/card')

// Cria um novo card na DB
const postCreateCard = async (data) => {
  try {
    await new cardModels(data).save()
    console.info(`Created new card: ${data.name}`)
  } catch (err) {
    const returnError = `Error creating card - ${err}`
    console.error(returnError)
    return returnError
  }
}

// Mostra todos os cards
const getAllCards = async () => {
  try {
    let requestBody = await cardModels.find()
    return requestBody
  } catch (err) {
    const returnError = `Error while retrieving cards - ${err}`
    console.error(returnError)
    return returnError
  }
}

const getCardById = async (data) => {
  try {
    if (mongoose.Types.ObjectId.isValid(data)) {
      let requestBody = await cardModels.findById(data)
      return requestBody
    } else {
      throw new Error(`Parameter ${data} is not a valid ID`)
    }
  } catch (err) {
    const returnError = `Error while retrieving card - ${err}`
    console.error(returnError)
    return returnError
  }
}

const deleteCardById = async (data) => {
  try {
    if (mongoose.Types.ObjectId.isValid(data)) {
      await cardModels.findByIdAndDelete(data)
      return `Deleted card: ${data}`
    } else {
      throw new Error(`Parameter ${data} is not a valid ID`)
    }
  } catch (err) {
    const returnError = `Error deleting card - ${err}`
    console.error(returnError)
    return returnError
  }
}

module.exports = {
  postCreateCard,
  getAllCards,
  getCardById,
  deleteCardById
}