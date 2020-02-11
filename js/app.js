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
          valor: '1 Jaime Rebollo',
          mostrar: false,
          puntuacion: 40
        },
        {
          valor: '2 Nelly Sucre',
          mostrar: false,
          puntuacion: 30
        },
        {
          valor: '3 Leticia T.',
          mostrar: false,
          puntuacion: 15
        },
        {
          valor: '4 Karen Morales Soler',
          mostrar: false,
          puntuacion: 10
        },
        {
          valor: '5 Moises Briteño',
          mostrar: false,
          puntuacion: 5
        },
      ],
      respuestas2: [
        {
          valor: '1 Brassier',
          mostrar: false,
          puntuacion: 35
        },
        {
          valor: '2 Vestido',
          mostrar: false,
          puntuacion: 29
        },
        {
          valor: '3 Zapatillas',
          mostrar: false,
          puntuacion: 15
        },
        {
          valor: '4 Tanga',
          mostrar: false,
          puntuacion: 8
        },
        {
          valor: '5 Pantimedias',
          mostrar: false,
          puntuacion: 7
        },
        {
          valor: '6 Liguero',
          mostrar: false,
          puntuacion: 6
        },
      ],
      respuestas3: [
        {
          valor: '1 Pera',
          mostrar: false,
          puntuacion: 36
        },
        {
          valor: '2 Manzana',
          mostrar: false,
          puntuacion: 27
        },
        {
          valor: '3 Sandía',
          mostrar: false,
          puntuacion: 22
        },
        {
          valor: '4 Limon',
          mostrar: false,
          puntuacion: 15
        }
      ],
      respuestas4: [
        {
          valor: '1 Fuerza',
          mostrar: false,
          puntuacion: 40
        },
        {
          valor: '2 Resistencia',
          mostrar: false,
          puntuacion: 30
        },
        {
          valor: '3 Agilidad',
          mostrar: false,
          puntuacion: 15
        },
        {
          valor: '4 Velocidad',
          mostrar: false,
          puntuacion: 10
        },
        {
          valor: '5 Coordinación',
          mostrar: false,
          puntuacion: 5
        }
      ],
      respuestas5: [
        {
          valor: '1 Peluches',
          mostrar: false,
          puntuacion: 36
        },
        {
          valor: '2 Cartas',
          mostrar: false,
          puntuacion: 27
        },
        {
          valor: '3 Anillos/Joyas',
          mostrar: false,
          puntuacion: 22
        },
        {
          valor: '4 Fotos',
          mostrar: false,
          puntuacion: 15
        }
      ],
      respuestas6: [
        {
          valor: '1 Posición de la cabeza',
          mostrar: false,
          puntuacion: 40
        },
        {
          valor: '2 Ubicación de los hombros',
          mostrar: false,
          puntuacion: 30
        },
        {
          valor: '3 Curvas fisiologicas de la columna vertebral',
          mostrar: false,
          puntuacion: 15
        },
        {
          valor: '4 Alineación de las rodillas',
          mostrar: false,
          puntuacion: 10
        },
        {
          valor: '5 Altura y alineación de la boveda Plantar',
          mostrar: false,
          puntuacion: 5
        }
      ],
      respuestas7: [
        {
          valor: '1 Tacos',
          mostrar: false,
          puntuacion: 40
        },
        {
          valor: '2 Pozole',
          mostrar: false,
          puntuacion: 30
        },
        {
          valor: '3 Enchiladas',
          mostrar: false,
          puntuacion: 15
        },
        {
          valor: '4 Quesadillas',
          mostrar: false,
          puntuacion: 10
        },
        {
          valor: '5 Carnitas',
          mostrar: false,
          puntuacion: 5
        }
      ],
      respuestas8: [
        {
          valor: '1 Hereditarios',
          mostrar: false,
          puntuacion: 36
        },
        {
          valor: '2 Físicos',
          mostrar: false,
          puntuacion: 27
        },
        {
          valor: '3 Psicolologicos',
          mostrar: false,
          puntuacion: 22
        },
        {
          valor: '4 Contextuales',
          mostrar: false,
          puntuacion: 15
        }
      ],
      respuestas9: [
        {
          valor: '1 Panda',
          mostrar: false,
          puntuacion: 40
        },
        {
          valor: '2 Polar',
          mostrar: false,
          puntuacion: 30
        },
        {
          valor: '3 Hormiguero',
          mostrar: false,
          puntuacion: 15
        },
        {
          valor: '4 Negro',
          mostrar: false,
          puntuacion: 10
        },
        {
          valor: '5 Peluche',
          mostrar: false,
          puntuacion: 5
        }
      ],
      respuestas10: [
        {
          valor: '1 Contacto inicial',
          mostrar: false,
          puntuacion: 30
        },
        {
          valor: '2 Respuesta a la carga',
          mostrar: false,
          puntuacion: 20
        },
        {
          valor: '3 Soporte medio',
          mostrar: false,
          puntuacion: 15
        },
        {
          valor: '4 Soporte terminal',
          mostrar: false,
          puntuacion: 10
        },
        {
          valor: '5 Pre-balanceo',
          mostrar: false,
          puntuacion: 9
        },
        {
          valor: '6 Balanceo inicial',
          mostrar: false,
          puntuacion: 8
        },
        {
          valor: '7 Balanceo medial',
          mostrar: false,
          puntuacion: 5
        },
        {
          valor: '8 Balanceo terminal',
          mostrar: false,
          puntuacion: 3
        }
      ],
      respuestas11: [
        {
          valor: '1 Calzones',
          mostrar: false,
          puntuacion: 36
        },
        {
          valor: '2 Calcetines',
          mostrar: false,
          puntuacion: 27
        },
        {
          valor: '3 Brasier',
          mostrar: false,
          puntuacion: 22
        },
        {
          valor: '4 Traje de baño',
          mostrar: false,
          puntuacion: 15
        }
      ],
      respuestas12: [
        {
          valor: '1 Desodorante',
          mostrar: false,
          puntuacion: 36
        },
        {
          valor: '2 Pasta de dientes',
          mostrar: false,
          puntuacion: 27
        },
        {
          valor: '3 Cepillo de dientes',
          mostrar: false,
          puntuacion: 22
        },
        {
          valor: '4 Chanclas',
          mostrar: false,
          puntuacion: 15
        }
      ],
      respuestas13: [
        {
          valor: '1 Manos',
          mostrar: false,
          puntuacion: 40
        },
        {
          valor: '2 Piernas',
          mostrar: false,
          puntuacion: 30
        },
        {
          valor: '3 Abdomen',
          mostrar: false,
          puntuacion: 15
        },
        {
          valor: '4 Pompas',
          mostrar: false,
          puntuacion: 10
        },
        {
          valor: '5 Ojos',
          mostrar: false,
          puntuacion: 5
        }
      ],
    }

  },
  methods: {
    destaparRespuesta: function (index) {
      var audio = new Audio("audio/respuesta-correcta.mp3");
      audio.play();
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
      if (this.respuestaActual >= Object.keys(this.arrayRespuestas).length){
        alert('Se acabaron las preguntas');
        return;
      }

      var audio = new Audio("audio/vamos-a-jugar.mp3");
      audio.play();

      this.respuestaActual++;
      this.contarPuntuacionRonda = true;
      this.puntuacionRonda = 0
    }
  }
})
