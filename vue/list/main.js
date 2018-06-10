var app = new Vue({
    el: '#app',
    data: {
        name: 'rezard'
        , list: [
            { id: 1, name: 'dog', hp: 100}
            , { id: 2, name: 'cat', hp: 100}
            , { id: 3, name: 'dragon', hp: 1000}
        ]
    },
    methods: {
        doAdd: function() {
            var max = this.list.reduce(function(a, b) {
                return a.id > b.id ? a.id : b.id
            }, 0)

            this.list.push({
                id: max + 1
                , name: this.name
                , hp: 500
            })
        }
        , doRemove: function(index) {
            this.list.splice(index, 1)
        }
    }
})
