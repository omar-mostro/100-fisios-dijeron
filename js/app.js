new Vue({
    el: '#app',
    data: {
        puntuacionRonda: 0,
        respuestas1: [
          {valor: 'test 1', mostrar: false, puntuacion: 50},
          {valor: 'test 2', mostrar: false, puntuacion: 20},
          {valor: 'test 3', mostrar: false, puntuacion: 20},
          {valor: 'test 4', mostrar: false, puntuacion: 10},
        ]
    },
    methods: {
        destaparRespuesta: function (nombreArrayRespuestas, index) {
            this[nombreArrayRespuestas][index].mostrar = true;
            this.puntuacionRonda = this[nombreArrayRespuestas][index].puntuacion + this.puntuacionRonda;
        }
    }
});
