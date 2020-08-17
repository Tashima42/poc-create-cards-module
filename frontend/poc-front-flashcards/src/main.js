import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Global CSS file
import '@/assets/css/main.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
