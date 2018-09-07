var vm1 = new Vue ({
    el: '#vm1',
    data: {
        name: 'Vue Instance #1'
    }
});

setTimeout(function(){
   vm1.name = 'hello new vue instance!';
}, 2000);

/*timeout function used to display change.*/