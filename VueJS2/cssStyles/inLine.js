new Vue ({
    el: '#app',
    data: {
        moreStyles: {
            'border-radius' : '10px'
        }
    },
    computed: {
        styles: function() {
            var height = 200;

            return {
                'background-color' : 'blue',
                width: (height / 2) + 'px',
                height: height + 'px'
            };
        }
    }

});