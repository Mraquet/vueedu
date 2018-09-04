new Vue ({
    el: '#app',
    data: {
        message: 'You are turning into a vue superstar!'
    },
    filters: {
        uwfirst: function(value) {
            if (!value){
                return '';
            }
            var parts = value.toString().split('');
            var uppercasedWords = parts.map(function(word){
               return word.charAt(0).toUpperCase() + word.slice(1);
            });

            return uppercasedWords.join(' ');

        },
        removeSpaces: function(value) {
            if (!value){
                return '';
            }
            return value.toString().replace(/ /g, '');
        }

    }
});