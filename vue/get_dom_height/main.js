new Vue({
    el: '#app',
    data: {
        list: []
    },
    watch: {
        list: function() {
            console.log('normal:', this.$refs.list.offsetHeight)
            this.$nextTick(function() {
                console.log('nextTick:', this.$refs.list.offsetHeight)
            })
        }
    }
})
