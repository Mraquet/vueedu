setTimeout(function () {
    var vm = new Vue ({
        data: {
            message: 'Hello World!'
        }
    });
    vm.$mount('#app');
}, 2000);
