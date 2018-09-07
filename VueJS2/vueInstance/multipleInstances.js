var vm1 = new Vue ({
    el: '#vm1',
    data: {
        name: 'Vue Instance #1'
    }
});

var vm2 = new Vue ({
    el: '#vm2',
    methods: {
        showName: function(){
            return this.vm1.name;
        }
    }
});

setTimeout(function(){
   vm1.name = 'Hello from your new vue instance!';
}, 2000);