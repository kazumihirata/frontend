var state = { count: 0 }
var app = new Vue({
    el: '#app',
    data: {
        // **************************
        message: {
            value: 'Hello Vue.js!'
        },
        // **************************
        list: ['apple', 'banana', 'orange']
        // **************************
        , num: 1
        // **************************
    }
})
state.count++
