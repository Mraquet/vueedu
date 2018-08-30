new Vue({
    el: '#app',
    data: {
        counter: 1,
        firstName: 'Hamp',
        lastName: 'Star'
    },
    computed: {
        fullName: {
            get: function() {
                alert('Assembling full name...');
                return this.firstName + ' ' + this.lastName;
                },
            set: function(newValue) {
                alert("newValue");
                const parts = newValue.split(' ');
                this.firstName = parts[0];
                this.lastName = parts[parts.length - 1];
            }
        }
    },
    methods: {
        changeName: function(){
            this.firstName = 'Pusha';
            this.lastName = 'Hamp';
        },
        changeNameSetter: function () {
            this.fullName = 'Pusha Hamp';
        }
    }


});