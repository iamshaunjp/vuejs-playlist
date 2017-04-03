import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
