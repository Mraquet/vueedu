new Vue({
    el: '#app',
    data: {
        counter: 1,
        firstName: 'Hamp',
        lastName: 'Star'
    },
    computed: {
        fullName: function(){
          alert('Assembling full name...');
          return this.firstName + ' ' + this.lastName

        }
    },
    methods: {
        changeName: function(){
            this.firstName = 'Pusha';
            this.lastName = 'Hamp';
        }
    }


});

/* Change computed to methods, add parentheses in HTML, and remove the methods section to see why computed is necessary. Using methods will alert twice.*/