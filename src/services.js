const cardModels = require('./models/card')

// Cria um novo card na DB
const postCreateCard = async (data) => {
  try {
    await new cardModels(data).save()
    console.info(`Created new card: ${data.name}`)
  } catch (err) {
    console.error(`Error creating card: ${err}`)
  }
}

// Mostra todos os cards
const getAllCards = async () => {
  try {
    let requestBody = await cardModels.find()
    return requestBody
  } catch (err) {
    console.error(`Error while trying to retrieve all cards: ${err}`)
  }
}


module.exports = {
  postCreateCard,
  getAllCards
}