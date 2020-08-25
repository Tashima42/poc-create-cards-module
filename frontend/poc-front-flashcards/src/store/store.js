import Vue from 'vue'
import Vuex from 'vuex'

import initial from './modules/initial'
import editDeck from './modules/editDeck'
import newDeck from './modules/newDeck'
import showAnswer from './modules/showAnswer'
import showQuestion from './modules/showQuestion'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { initial, editDeck, newDeck, showAnswer, showQuestion }
})