var app = new Vue({
    // *********************************
    el: '#app',
    // *********************************
    data: {
        message: 'Vue.js'
    },
    // *********************************
    computed: {
        computedMessage: function() {
            return this.message + '!'
        }
    },
    // *********************************
    create: function() {
        //
        console.log('created')
    },
    // *********************************
    methods: {
        myMethod: function() {
            //
        }
    }
    // *********************************
})
