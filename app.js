Vue.component('greeting', {
  template: '<p>I am {{ name }} <button v-on:click="changeName">Change name</button></p>',
  data: function(){
    return {
      name: "Yoshi"
    }
  },
  methods: {
    changeName: function(){
      this.name = "Mario"
    }
  }
});

const one = new Vue({
    el: '#vue-app-one',
    data: {
      title: 'Vue app one'
    },
    methods: {

    },
    computed: {
     greet: function(){
       return 'hello from app 1';
     }
    }
});

const two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue app one'
  },
  methods: {
    changeTitle: function(){
      one.title = "Title changed";
    }
  },
  computed: {
    greet: function(){
      return 'This is app 2';
    }
  }
});

two.title = "Change from outside"