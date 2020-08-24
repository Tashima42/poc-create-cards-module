import Vue from 'vue'
import App from './App.vue'
import router from './components/router'

Vue.config.productionTip = false

//Global CSS file
import '@/assets/css/main.css'
// Axios
import './plugins/axios'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
