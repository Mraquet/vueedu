new Vue({
    el: '#app',
    data: {
        people: [
            {
                name: 'Tyler',
                id: 1
            },
            {
                name: 'Molly',
                id: 2
            },
            {
                name: 'Jim',
                id: 3
            },
            {
                name: 'Chad',
                id: 4
            }
        ]
    },
    methods: {
        shuffle: function() {
            this.people = this.shuffleArray(this.people);
        },
        shuffleArray: function(arr) {
            var newArray = arr.slice();
            for (var i = newArray.length -1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i+1));
                var temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
            }
            return newArray;
        }
    }

});