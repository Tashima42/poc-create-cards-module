const cardModels = require('./models/card')

const createCardRequest = (requestBody) => {
  const receivedRequestBody = requestBody
  createNewCard(receivedRequestBody)
}


// Cria um novo card na DB
const createNewCard = async (cardObject) => {
  try {
    await new cardModels.cardBaseModel(cardObject).save()
    console.info(`Create card ${cardObject.name}`)
  } catch (err) {
    console.error(`Error creating card: ${err}`)
  }

}

exports.createCardRequest = createCardRequest