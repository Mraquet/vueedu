var vm = new Vue({
    el: '#app',
    data: {
        counter: 1
    }

});

vm.$watch(
    function() {
        return this.counter;
    },
    function(newValue, oldValue) {
        alert('Counter changed from' + oldValue + ' to ' + newValue);
    }
);

/*vm.$watch('counter', function(newValue, oldValue){
   alert('Counter changed from ' + oldValue + ' to ' + newValue);
});
basic example*/