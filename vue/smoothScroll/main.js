var scroll = new SmoothScroll()
new Vue({
    el: '#app',
    data: {
        scrollY: 0,
        timer: null
    },
    methods: {
        scrollTop: function() {
            scroll.animateScroll(100)
        }
    }
})
