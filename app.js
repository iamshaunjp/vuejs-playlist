new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function(){
            console.log('you entered your name');
        },
        logAge: function(){
            console.log('you entered your age');
        }
    }
});
