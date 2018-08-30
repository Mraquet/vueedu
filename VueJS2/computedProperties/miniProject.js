new Vue({
    el: '#app',
    data: {
        movies: [
            {
                name: 'The Parent Trap',
                year: 1998
            },
            {
                name: 'The Fox and the Hound',
                year: 1981
            },
            {
                name: '101 Dalmatians',
                year: 1961 
            }
        ]
    },
    watch: {
      movies: function (movies) {
          var newMovie = movies[movies.length - 1];
          alert(newMovie.name + ' from ' + newMovie.year + ' was just added!');
      }
    },
    computed: {
        myMovie: function () {
           return this.movies.map(function(movie) {
              return movie.name + ' (' + movie.year +')';
           });
        }
    },
    methods: {
        addMovie: function() {
            this.movies.push({
                name: 'Cinderella',
                year: 1950
            })
        }
    }
});