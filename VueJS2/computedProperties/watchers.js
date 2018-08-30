new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        results: [],
        isSearching: false
    },
    watch: {
        searchQuery: function (query) {
            this.isSearching = true;
            const vm = this;

            setTimeout(function() {
                vm.results = ['Javascript', 'PHP', 'MySQL'];
                vm.isSearching = false;
            }, 500);
        }
    }
});