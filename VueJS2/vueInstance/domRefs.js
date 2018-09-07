new Vue ({
   el: '#app',
   data: {
       firstName: '',
       lastName: ''
   },
    methods: {
       logIn: function() {
           console.log(this.$refs);
           this.firstName = this.$refs.username.value;
       }
 //just logging this.$ref will show all refs. Can attach any property name you want to access (value is the example)//
    }
});