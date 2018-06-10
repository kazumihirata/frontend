new Vue({
    el: '#app',
    data: {
        order: false,
        budget: 1111300,
        limit: 5,
        list: [
            {id: 1, name: 'apple', price: 600},
            {id: 2, name: 'orange', price: 200},
            {id: 3, name: 'banana', price: 50},
            {id: 4, name: 'melon', price: 1000},
            {id: 5, name: 'watermelon', price: 1000},
        ]
    },
    computed: {
        matched: function() {
            return this.list.filter(function(el) {
                return el.price <= this.budget
            }, this)
        },
        sorted: function() {
            // error...
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')

        },
        limited: function() {
            // return this.matched.slice(0, this.limit)
            return this.sorted.slice(0, this.limit)
        }
    }
})
