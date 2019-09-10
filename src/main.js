import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueParticle from 'vue-particles'

Vue.config.productionTip = false
Vue.use(VueParticle)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
