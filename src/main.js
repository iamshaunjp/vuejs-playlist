import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);

// Custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});

Vue.directive('theme', {
    bind(el, binding, vnode){
        if (binding.value == 'wide'){
            el.style.maxWidth = "1260px";
        } else if (binding.value = 'narrow'){
            el.style.maxWidth = "560px";
        }
        if(binding.arg == 'column'){
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
