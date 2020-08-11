const cardModels = require('./models/card')

const createCardRequest = (requestBody) => {
  const receivedRequestBody = requestBody
  createNewCard(receivedRequestBody)
}

const sendAllCardsRequest = async () => {
  try {
    let requestBody = await cardModels.find()
    return requestBody
  } catch (err) {
    console.error(`Error while trying to retrieve all cards: ${err}`)
  }
}




// Cria um novo card na DB
const createNewCard = async (cardObject) => {
  try {
    await new cardModels(cardObject).save()
    console.info(`Create card ${cardObject.name}`)
  } catch (err) {
    console.error(`Error creating card: ${err}`)
  }

}

module.exports = {
  createCardRequest: createCardRequest,
  sendAllCardsRequest: sendAllCardsRequest
}