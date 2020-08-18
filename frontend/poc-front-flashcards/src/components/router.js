import Vue from 'vue'
import Router from 'vue-router'

import OuterDeckDisplay from './OuterDeckDisplay'
import InnerDeckDisplay from "./InnerDeckDisplay";
import InsertTextLarge from "./InsertTextLarge";
import InsertTextSmall from "./InsertTextSmall";
import TextBox from "./TextBox";
import DefaultButton from "./DefaultButton";

import Initial from "../views/Initial";
import NewDeck from "../views/NewDeck";
import EditDeck from "../views/EditDeck"

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/outer',
    component: OuterDeckDisplay,
  }, {
    path: '/inner',
    component: InnerDeckDisplay,
  }, {
    path: '/insert-large',
    component: InsertTextLarge,
  }, {
    path: '/insert-small',
    component: InsertTextSmall,
  }, {
    path: '/text',
    component: TextBox,
  }, {
    path: '/',
    component: Initial,
  }, {
    path: '/new',
    component: NewDeck,
  }, {
    path: '/button',
    component: DefaultButton
  }, {
    path: '/edit',
    component: EditDeck
  }
  ]
})