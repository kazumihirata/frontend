new Vue({
    el: '#app',
    data() {
        return {
            sort: {
                key: '',
                isAsc: false
            },
            items: [
                { id: 1, name: 'taro', age: 20 },
                { id: 2, name: 'jiro', age: 19 },
                { id: 3, name: 'saburo', age: 18 },
                { id: 4, name: 'shiro', age: 30 },
            ]
        }
    },
    computed: {
        sortedItems () {
            const list = this.items.slice();
            if (!!this.sort.key) {
                list.sort((a, b) => {
                    a = a[this.sort.key]
                    b = b[this.sort.key]

                    return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1)
                });
            }
            return list;
        }
    },
    methods: {
        sortedClass (key) {
            return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc' }` : '';
        },
        sortBy (key) {
            this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
            this.sort.key = key;
        }
    }
})
