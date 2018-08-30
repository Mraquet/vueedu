new Vue({
    el: '#app',
    data: {
        numbers: [1,2,3,4,5]
    },
    methods: {
        changeNumber: function() {
            /*this.numbers[1] = 10; uses square bracket to update the element at the index, not compatible with vue,
            must use function in next line.
             */
            Vue.set(this.numbers,2,10);
            alert(this.numbers[1]);
        }
    }
});