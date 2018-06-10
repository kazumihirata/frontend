var state = { count: 0 }
var app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        increment: function() {
            this.count += 1
            console.log(this.count)
        }
    }
})
state.count++
