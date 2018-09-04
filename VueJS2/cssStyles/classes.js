new Vue({
    el: '#app',
    data: {
        shapes: [
            { shape: 'circle' },
            { shape: 'square', animate: true },
            { shape: 'triangle', direction: 'up' },
            { shape: 'triangle', direction: 'right', animate: true },
            { shape: 'triangle', direction: 'down' },
            { shape: 'triangle', direction: 'left', animate: true }
        ]
    },

});