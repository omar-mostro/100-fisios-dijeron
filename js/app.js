new Vue({
  el: '#app',
  data: {
    respuestaActual: 1,
    contarPuntuacionRonda: true,
    puntuacionRonda: 0,
    puntuacionEquipo1: 0,
    puntuacionEquipo2: 0,
    arrayRespuestas: {
      respuestas1: [
        {
          valor: 'test 1',
          mostrar: false,
          puntuacion: 50
        },
        {
          valor: 'test 2',
          mostrar: false,
          puntuacion: 20
        },
        {
          valor: 'test 3',
          mostrar: false,
          puntuacion: 20
        },
        {
          valor: 'test 4',
          mostrar: false,
          puntuacion: 10
        },
      ],
      respuestas2: [
        {
          valor: 'test 1',
          mostrar: false,
          puntuacion: 80
        },
        {
          valor: 'test 2',
          mostrar: false,
          puntuacion: 20
        },

      ],
      respuestas3: [
        {
          valor: 'test 4',
          mostrar: false,
          puntuacion: 100
        },
      ],
    }

  },
  methods: {
    destaparRespuesta: function (index) {
      this.arrayRespuestas['respuestas'+this.respuestaActual][index].mostrar = true
      this.puntuacionRonda = this.arrayRespuestas['respuestas'+this.respuestaActual][index].puntuacion + this.puntuacionRonda
    },
    asignarPuntosEquipo: function (numEquipo) {

      if (!this.contarPuntuacionRonda){
        return;
      }

      this['puntuacionEquipo' + numEquipo] = this['puntuacionEquipo' + numEquipo] + this.puntuacionRonda
      this.puntuacionRonda = 0
      this.contarPuntuacionRonda = false
    },
    siguientePregunta: function () {
      this.respuestaActual++;
      this.contarPuntuacionRonda = true
    }
  }
})
