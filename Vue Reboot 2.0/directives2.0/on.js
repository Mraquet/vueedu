var app = new Vue ({
    el: '#app',
    data: {
        message: 'People'
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});