var one = new Vue({
    el: '#vue-app-one',
    data: {
      title: 'Vue App One'
    },
    computed: {
      greet: function(){
        return 'Hello, from app one :)';
      }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
      title: 'Vue App Two'
    },
    computed: {
      greet: function(){
        return 'Yo dudes, this is app 2 speaking to ya';
      }
    },
    methods: {
      changeTitle: function(){
        one.title = 'Title Changed';
      }
    }
});

two.title = 'Changed from outside';
