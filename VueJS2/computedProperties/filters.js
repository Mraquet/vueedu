new Vue ({
    el: '#app',
    data: {
        message: ['tomorrow is friday get excited!', 'why should I be excited about friday?', 'Saturday is what we have all been waiting on!']
    },
    filters: {
        uppercase: function(value, onlyFirstCharacter) {
            if(!value){
                return '';
            }
            value = value.toString();


            if (onlyFirstCharacter) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            } else {
                return value.toUpperCase();
            }
        }
    }
});