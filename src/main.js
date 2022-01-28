import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})


Vue.config.globalProperties.dbUrl = 'https://script.google.com/macros/s/AKfycbx5p6lGi3tN9wwrbH9EL1axfNB8qlaCVdbJC5Yubytqbz0qE9qj/exec?id=1m3qFWYQD_kE5gstB4-XaLR414CejBJL6fw5lXK9M1Lk&range=PAYS&type=aoo';
