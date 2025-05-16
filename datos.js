let turno = 1; 
let vidaJugador1 = 100;
let vidaJugador2 = 100;
let indicePreguntaActual = 0;  


const preguntas = [
  {
    pregunta: '¿Cuál es el símbolo del Carbono?',
    respuestas: [
     
      { texto: 'Ca', correcta: false },
      { texto: 'Co', correcta: false },
      { texto: 'Cl', correcta: false },
       { texto: 'C', correcta: true }
    ]
  },
  {
    pregunta: '¿Qué elemento tiene el número atómico 1?',
    respuestas: [
      { texto: 'Hidrógeno', correcta: true },
      { texto: 'Helio', correcta: false },
      { texto: 'Litio', correcta: false },
      { texto: 'Oxígeno', correcta: false }
    ]
  },
  {
    pregunta: '¿Qué tipo de elemento es el Neon?',
    respuestas: [
      { texto: 'Gas noble', correcta: true },
      { texto: 'Metal alcalino', correcta: false },
      { texto: 'No metal', correcta: false },
      { texto: 'Metaloide', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Azufre?',
    respuestas: [
      { texto: 'S', correcta: true },
      { texto: 'As', correcta: false },
      { texto: 'Se', correcta: false },
      { texto: 'Sb', correcta: false }
    ]
  },
  {
    pregunta: '¿Qué elemento tiene el símbolo "Ag"?',
    respuestas: [
      { texto: 'Plata', correcta: true },
      { texto: 'Oro', correcta: false },
      { texto: 'Aluminio', correcta: false },
      { texto: 'Argón', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el número atómico del Oxígeno?',
    respuestas: [
      { texto: '8', correcta: true },
      { texto: '16', correcta: false },
      { texto: '6', correcta: false },
      { texto: '10', correcta: false }
    ]
  },
  {
    pregunta: '¿Qué tipo de elemento es el Bromo?',
    respuestas: [
      { texto: 'Halógeno', correcta: true },
      { texto: 'Gas noble', correcta: false },
      { texto: 'Metal alcalino', correcta: false },
      { texto: 'Metaloide', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Helio?',
    respuestas: [

      { texto: 'H', correcta: false },
      { texto: 'Ho', correcta: false },
       { texto: 'He', correcta: true },
      { texto: 'Hl', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Hidrógeno?',
    respuestas: [
      
      { texto: 'O', correcta: false },
      { texto: 'H', correcta: true },
      { texto: 'N', correcta: false },
      { texto: 'He', correcta: false }
    ]
  },
{
  pregunta: '¿Cuál es el símbolo del Sodio?',
  respuestas: [
    { texto: 'Na', correcta: true },
    { texto: 'So', correcta: false },
    { texto: 'S', correcta: false },
    { texto: 'Sn', correcta: false }
  ]
},
{
  pregunta: '¿Qué elemento tiene el símbolo "K"?',
  respuestas: [
    { texto: 'Potasio', correcta: true },
    { texto: 'Kriptón', correcta: false },
    { texto: 'Kobalto', correcta: false },
    { texto: 'Calcio', correcta: false }
  ]
},
{
  pregunta: '¿Qué elemento tiene el número atómico 79?',
  respuestas: [
    { texto: 'Oro', correcta: true },
    { texto: 'Plata', correcta: false },
    { texto: 'Mercurio', correcta: false },
    { texto: 'Hierro', correcta: false }
  ]
},
{
  pregunta: '¿Cuál es el símbolo del Calcio?',
  respuestas: [
    { texto: 'Ca', correcta: true },
    { texto: 'Cl', correcta: false },
    { texto: 'Cs', correcta: false },
    { texto: 'C', correcta: false }
  ]
},
{
  pregunta: '¿Qué tipo de elemento es el Helio?',
  respuestas: [
    { texto: 'Gas noble', correcta: true },
    { texto: 'Metal alcalino', correcta: false },
    { texto: 'Metaloide', correcta: false },
    { texto: 'Halógeno', correcta: false }
  ]
},
{
  pregunta: '¿Qué elemento tiene el símbolo "Fe"?',
  respuestas: [
    { texto: 'Hierro', correcta: true },
    { texto: 'Flúor', correcta: false },
    { texto: 'Francio', correcta: false },
    { texto: 'Fermio', correcta: false }
  ]
},
{
  pregunta: '¿Cuál es el número atómico del Carbono?',
  respuestas: [
    { texto: '6', correcta: true },
    { texto: '12', correcta: false },
    { texto: '8', correcta: false },
    { texto: '4', correcta: false }
  ]
},
{
  pregunta: '¿Qué elemento pertenece a los halógenos?',
  respuestas: [
    { texto: 'Cloro', correcta: true },
    { texto: 'Neón', correcta: false },
    { texto: 'Calcio', correcta: false },
    { texto: 'Zinc', correcta: false }
  ]
},
{
  pregunta: '¿Qué elemento tiene el símbolo "Mg"?',
  respuestas: [
    { texto: 'Magnesio', correcta: true },
    { texto: 'Manganeso', correcta: false },
    { texto: 'Mercurio', correcta: false },
    { texto: 'Molibdeno', correcta: false }
  ]
},
{
  pregunta: '¿Cuál es el símbolo del Fósforo?',
  respuestas: [
    { texto: 'P', correcta: true },
    { texto: 'F', correcta: false },
    { texto: 'Ph', correcta: false },
    { texto: 'Fs', correcta: false }
  ]
},
{
  pregunta: '¿Cuál es el símbolo del Sodio?',
  respuestas: [
    { texto: 'Na', correcta: true },
    { texto: 'So', correcta: false },
    { texto: 'S', correcta: false },
    { texto: 'Sn', correcta: false }
  ]
},
{
  pregunta: '¿Qué elemento tiene el símbolo "K"?',
  respuestas: [
    { texto: 'Potasio', correcta: true },
    { texto: 'Kriptón', correcta: false },
    { texto: 'Kobalto', correcta: false },
    { texto: 'Calcio', correcta: false }
  ]
},
{
  pregunta: '¿Qué elemento tiene el número atómico 79?',
  respuestas: [
    { texto: 'Oro', correcta: true },
    { texto: 'Plata', correcta: false },
    { texto: 'Mercurio', correcta: false },
    { texto: 'Hierro', correcta: false }
  ]
},
{
  pregunta: '¿Cuál es el símbolo del Calcio?',
  respuestas: [
    { texto: 'Ca', correcta: true },
    { texto: 'Cl', correcta: false },
    { texto: 'Cs', correcta: false },
    { texto: 'C', correcta: false }
  ]
},
{
  pregunta: '¿Qué tipo de elemento es el Helio?',
  respuestas: [
    { texto: 'Gas noble', correcta: true },
    { texto: 'Metal alcalino', correcta: false },
    { texto: 'Metaloide', correcta: false },
    { texto: 'Halógeno', correcta: false }
  ]
},
{
  pregunta: '¿Qué elemento tiene el símbolo "Fe"?',
  respuestas: [
    { texto: 'Hierro', correcta: true },
    { texto: 'Flúor', correcta: false },
    { texto: 'Francio', correcta: false },
    { texto: 'Fermio', correcta: false }
  ]
},
{
  pregunta: '¿Cuál es el número atómico del Carbono?',
  respuestas: [
    { texto: '6', correcta: true },
    { texto: '12', correcta: false },
    { texto: '8', correcta: false },
    { texto: '4', correcta: false }
  ]
},

{
  pregunta: '¿Qué elemento tiene el símbolo "Mg"?',
  respuestas: [
    { texto: 'Magnesio', correcta: true },
    { texto: 'Manganeso', correcta: false },
    { texto: 'Mercurio', correcta: false },
    { texto: 'Molibdeno', correcta: false }
  ]
},
{
  pregunta: '¿Cuál es el símbolo del Fósforo?',
  respuestas: [
    { texto: 'P', correcta: true },
    { texto: 'F', correcta: false },
    { texto: 'Ph', correcta: false },
    { texto: 'Fs', correcta: false }
  ]
},
  {
    pregunta: '¿Cuál es el símbolo del Aluminio?',
    respuestas: [
      { texto: 'Al', correcta: true },
      { texto: 'Au', correcta: false },
      { texto: 'Ag', correcta: false },
      { texto: 'Am', correcta: false }
    ]
  },
  {
    pregunta: '¿Qué elemento tiene el número atómico 2?',
    respuestas: [
      { texto: 'Helio', correcta: true },
      { texto: 'Hidrógeno', correcta: false },
      { texto: 'Litio', correcta: false },
      { texto: 'Berilio', correcta: false }
    ]
  },
  {
    pregunta: '¿Qué tipo de elemento es el Arsénico?',
    respuestas: [
      { texto: 'Metaloide', correcta: true },
      { texto: 'Metal alcalino', correcta: false },
      { texto: 'Gas noble', correcta: false },
      { texto: 'Halógeno', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Níquel?',
    respuestas: [
      { texto: 'Ni', correcta: true },
      { texto: 'N', correcta: false },
      { texto: 'Ne', correcta: false },
      { texto: 'Nk', correcta: false }
    ]
  },
  {
    pregunta: '¿Qué elemento tiene el símbolo "Pb"?',
    respuestas: [
      { texto: 'Plomo', correcta: true },
      { texto: 'Potasio', correcta: false },
      { texto: 'Paladio', correcta: false },
      { texto: 'Polonio', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el número atómico del Neón?',
    respuestas: [
      { texto: '10', correcta: true },
      { texto: '2', correcta: false },
      { texto: '20', correcta: false },
      { texto: '18', correcta: false }
    ]
  },
  {
    pregunta: '¿Qué tipo de elemento es el Cesio?',
    respuestas: [
      { texto: 'Metal alcalino', correcta: true },
      { texto: 'Gas noble', correcta: false },
      { texto: 'Halógeno', correcta: false },
      { texto: 'Metaloide', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Zinc?',
    respuestas: [
      { texto: 'Zn', correcta: true },
      { texto: 'Zc', correcta: false },
      { texto: 'Z', correcta: false },
      { texto: 'Zi', correcta: false }
    ]
  },
  {
    pregunta: '¿Qué elemento tiene el símbolo "Kr"?',
    respuestas: [
      { texto: 'Kriptón', correcta: true },
      { texto: 'Kryptonita', correcta: false },
      { texto: 'Kobalto', correcta: false },
      { texto: 'Calcio', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el grupo del Flúor?',
    respuestas: [
      { texto: 'Halógenos', correcta: true },
      { texto: 'Alcalinos', correcta: false },
      { texto: 'Metales alcalinotérreos', correcta: false },
      { texto: 'Gases nobles', correcta: false }
    ]
  },

  {
    pregunta: '¿Cuál es el símbolo del Níquel?',
    respuestas: [
      { texto: 'Ni', correcta: true },
      { texto: 'Nk', correcta: false },
      { texto: 'Ne', correcta: false },
      { texto: 'Nl', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Cobalto?',
    respuestas: [
      { texto: 'Co', correcta: true },
      { texto: 'Ca', correcta: false },
      { texto: 'Cb', correcta: false },
      { texto: 'Cl', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Molibdeno?',
    respuestas: [
      { texto: 'Mo', correcta: true },
      { texto: 'Mb', correcta: false },
      { texto: 'Md', correcta: false },
      { texto: 'Ml', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Bario?',
    respuestas: [
      { texto: 'Ba', correcta: true },
      { texto: 'Br', correcta: false },
      { texto: 'Bi', correcta: false },
      { texto: 'Be', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Titanio?',
    respuestas: [
      { texto: 'Ti', correcta: true },
      { texto: 'Ta', correcta: false },
      { texto: 'Tb', correcta: false },
      { texto: 'Te', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Plomo?',
    respuestas: [
      { texto: 'Pb', correcta: true },
      { texto: 'Pl', correcta: false },
      { texto: 'Po', correcta: false },
      { texto: 'Pd', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Neptunio?',
    respuestas: [
      { texto: 'Np', correcta: true },
      { texto: 'Ne', correcta: false },
      { texto: 'Nt', correcta: false },
      { texto: 'Nu', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Vanadio?',
    respuestas: [
      { texto: 'V', correcta: true },
      { texto: 'Va', correcta: false },
      { texto: 'Vi', correcta: false },
      { texto: 'Ve', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Circonio?',
    respuestas: [
      { texto: 'Zr', correcta: true },
      { texto: 'Ci', correcta: false },
      { texto: 'Zn', correcta: false },
      { texto: 'Cr', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Rubidio?',
    respuestas: [
      { texto: 'Rb', correcta: true },
      { texto: 'Ru', correcta: false },
      { texto: 'Rd', correcta: false },
      { texto: 'Ri', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Estaño?',
    respuestas: [
      { texto: 'Sn', correcta: true },
      { texto: 'St', correcta: false },
      { texto: 'Sa', correcta: false },
      { texto: 'Se', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Telurio?',
    respuestas: [
      { texto: 'Te', correcta: true },
      { texto: 'Tl', correcta: false },
      { texto: 'Tm', correcta: false },
      { texto: 'Tb', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Polonio?',
    respuestas: [
      { texto: 'Po', correcta: true },
      { texto: 'Pn', correcta: false },
      { texto: 'Pl', correcta: false },
      { texto: 'Pm', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Francio?',
    respuestas: [
      { texto: 'Fr', correcta: true },
      { texto: 'Fc', correcta: false },
      { texto: 'Fa', correcta: false },
      { texto: 'Fn', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Lutecio?',
    respuestas: [
      { texto: 'Lu', correcta: true },
      { texto: 'Lc', correcta: false },
      { texto: 'Lt', correcta: false },
      { texto: 'Le', correcta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el símbolo del Estroncio?',
    respuestas: [
      { texto: 'Sr', correcta: true },
      { texto: 'St', correcta: false },
      { texto: 'Se', correcta: false },
      { texto: 'Sn', correcta: false }
    ]
  },

  {
    pregunta: '¿Qué número atómico tiene el Oxígeno?',
    respuestas: [
      { texto: '8', correcta: true },
      { texto: '2', correcta: false },
      { texto: '16', correcta: false },
      { texto: '6', correcta: false }
    ]
  }

];


const preguntaElement = document.getElementById('pregunta');
const opcionesElement = document.getElementById('opciones');
const vidaJ1 = document.getElementById('vida-j1');
const vidaJ2 = document.getElementById('vida-j2');
const jugadorTurno = document.getElementById('jugador-turno');
const resultadoElement = document.getElementById('resultado');


function cambiarTurno() {
  turno = turno === 1 ? 2 : 1;
  jugadorTurno.textContent = turno === 1 ? 'Jugador 1' : 'Jugador 2';
  mostrarPregunta();
}


function actualizarVida() {
  vidaJ1.style.width = `${vidaJugador1}%`;
  vidaJ2.style.width = `${vidaJugador2}%`;
}


function mostrarPregunta() {
  if (indicePreguntaActual >= preguntas.length) {
    alert('¡Se acabaron las preguntas!');
    reiniciarJuego();
    return;
  }

  const pregunta = preguntas[indicePreguntaActual];
  preguntaElement.textContent = pregunta.pregunta;

  opcionesElement.innerHTML = '';
  pregunta.respuestas.forEach((respuesta, index) => {
    const boton = document.createElement('button');
    boton.textContent = respuesta.texto;
    boton.onclick = () => verificarRespuesta(respuesta, index);
    opcionesElement.appendChild(boton);
  });
}


function verificarRespuesta(respuestaSeleccionada, index) {
  if (respuestaSeleccionada.correcta) {
    resultadoElement.textContent = '¡Respuesta correcta!';
    resultadoElement.style.color = 'green';

    
    if (turno === 1) {
      vidaJugador2 -= 10;                    
      vidaJugador1 = Math.min(vidaJugador1 + 5, 100); 
    } else {
      vidaJugador1 -= 10;                     
      vidaJugador2 = Math.min(vidaJugador2 + 5, 100); 
    }
  } else {
    resultadoElement.textContent = 'Respuesta incorrecta';
    resultadoElement.style.color = 'red';

    
    if (turno === 1) {
      vidaJugador1 -= 10;
    } else {
      vidaJugador2 -= 10;
    }
  }

  actualizarVida();

 
  if (vidaJugador1 <= 0 || vidaJugador2 <= 0) {
    setTimeout(() => {
      alert(vidaJugador1 <= 0 ? '¡Jugador 2 gana!' : '¡Jugador 1 gana!');
      reiniciarJuego();
    }, 500);
  } else {
    indicePreguntaActual++; 
    setTimeout(cambiarTurno, 1500);
  }
}


function reiniciarJuego() {
  vidaJugador1 = 100;
  vidaJugador2 = 100;
  actualizarVida();
  resultadoElement.textContent = '';
  indicePreguntaActual = 0;
  turno = 1;
  jugadorTurno.textContent = 'Jugador 1';
  mostrarPregunta();
}

actualizarVida();
mostrarPregunta();
