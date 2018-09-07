var vm = new Vue ({
//remove el: '#app" to see how vue instance is created, but not mounted to a template. THEN add in the set timeout function to see the mounted hook be invoked.//
    el: '#app',
    data: {
        message: 'Hello World',
        counter: 1
    },
    beforeCreate: [
        function () {
            alert('beforeCreated #1');
        },
        function () {
            alert('beforeCreated #2');
        },
    ],
    created: function() {
        alert('created');
    },
    beforeMount: function() {
        alert('beforeMount');
    },
    mounted: function() {
        alert('mounted');
    },
    beforeUpdate: function() {
        alert('beforeUpdate');
    },
    updated: function() {
        alert('updated');
    },
    beforeDestory: function() {
        alert('beforeDestroy');
    },
    destroyed: function() {
        alert('destroyed');
    }
});

console.log(vm);

/*setTimeout(function(){
    vm.$mount('#app');
},2000 );*/