var data = {
    x: 1,
    y: 2
};

var vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        showMessage: function() {
            alert(this.message);
        }
    },
    computed: {
        z: function() {
            return this.x + this.y;
        }
    }
});

console.log(vm);
vm.message = 'hello world';
