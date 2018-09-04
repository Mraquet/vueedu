Vue.component('contact-us', {
    data: function() {
        return {
            email: 'vuemasta300@gmail.com'
        };
    },
    template: `
        <div>
            <h1>Contact us</h1>
            <p>Please send an email to {{email}}</p>
        </div>    
    `
});

new Vue ({
    el: '#app'
});