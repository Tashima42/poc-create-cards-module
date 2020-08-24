import Vue from 'vue'
import Router from 'vue-router'

import Initial from "./views/Initial";
import NewDeck from "./views/NewDeck";
import EditDeck from "./views/EditDeck"
import StudyDeckQuestion from "./views/StudyDeckQuestion"
import StudyDeckAnswer from "./views/StudyDeckAnswer"

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'initial',
      path: '/',
      components: {
        default: Initial
      },
    }, {
      name: 'NewDeck',
      path: '/new',
      component: NewDeck,
    }, {
      name: 'EditDeck',
      path: '/edit',
      component: EditDeck
    }, {
      name: 'StudyQuestion',
      path: "/study-question",
      component: StudyDeckQuestion
    }, {
      name: 'StudyAnswer',
      path: "/study-answer",
      component: StudyDeckAnswer
    }
  ]
})