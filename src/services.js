const cardModels = require('./models/card')

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
    let requestBody = await cardModels.findById(data)
    return requestBody
  } catch (err) {
    const returnError = `Error while retrieving card - ${err}`
    console.error(returnError)
    return returnError
  }
}

module.exports = {
  postCreateCard,
  getAllCards,
  getCardById
}