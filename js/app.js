new Vue({
    el: '#app',
    data: {
        destaparPregunta1: false,
        preguntas1: [
          'test 1',
          'test 2',
          'test 3',
          'test 4',
          'test 5',
          'test 6',
          'test 7',
        ]
    },
    methods: {
        destaparPregunta: function () {
            this.destaparPregunta1 = true
        }
    }
});
