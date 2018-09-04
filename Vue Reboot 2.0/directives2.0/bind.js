var app = new Vue ({
    el: '#app',
    data: {
        message: 'You are visiting this website and reading this sentence at ' + new Date().toLocaleString()
    }
});

var app2 = new Vue ({
    el: '#app2',
    data: {
        seen: true
    }
});