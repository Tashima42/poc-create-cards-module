import Vue from 'vue'
import axios from 'axios'


Vue.use({
  install(Vue) {
    Vue.prototype.$http =
      axios.create({
        baseURL: 'http://192.168.15.13:3000',
      })
  }
})