// Definir las dietas en un array de objetos
const dietas = [
    {
        nombre: 'perderPesoJoven',
        titulo: 'Dieta para Perder Peso (18-35 años)',
        edades: [18, 35],
        menu: [
            'Desayuno: Avena con frutas y yogur.',
            'Almuerzo: Ensalada con pollo a la plancha.',
            'Merienda: Fruta fresca.',
            'Cena: Pescado al horno con verduras al vapor.'
        ]
    },
    {
        nombre: 'perderPesoAdulto',
        titulo: 'Dieta para Perder Peso (36-60 años)',
        edades: [36, 60],
        menu: [
            'Desayuno: Tostadas integrales con aguacate y huevo.',
            'Almuerzo: Ensalada de quinoa con atún.',
            'Merienda: Yogur bajo en grasa con frutos secos.',
            'Cena: Pollo al horno con verduras al vapor.'
        ]
    },
    {
        nombre: 'ganarMasaJoven',
        titulo: 'Dieta para Ganar Masa Muscular (18-35 años)',
        edades: [18, 35],
        menu: [
            'Desayuno: Tortilla de claras de huevo con espinacas y pan integral.',
            'Almuerzo: Pollo a la plancha con arroz integral y brócoli.',
            'Merienda: Batido de proteínas y frutos secos.',
            'Cena: Salmón al horno con quinoa y espárragos.'
        ]
    },
    {
        nombre: 'ganarMasaAdulto',
        titulo: 'Dieta para Ganar Masa Muscular (36-60 años)',
        edades: [36, 60],
        menu: [
            'Desayuno: Smoothie de proteínas con avena y frutas.',
            'Almuerzo: Carne magra con patatas al horno y ensalada.',
            'Merienda: Yogur griego con miel y nueces.',
            'Cena: Pechuga de pollo con quinoa y verduras.'
        ]
    }
];

// Función para mostrar la dieta seleccionada
function mostrarDieta(nombreDieta) {
    const dieta = dietas.find(d => d.nombre === nombreDieta);

    let dietaTexto = '';

    if (dieta) {
        dietaTexto += `<h3>${dieta.titulo}</h3><ul>`;
        dieta.menu.forEach(item => {
            dietaTexto += `<li>${item}</li>`;
        });
        dietaTexto += '</ul>';
    } else {
        dietaTexto = 'No se encontró la dieta seleccionada.';
    }

    document.getElementById('dieta').innerHTML = dietaTexto;
}

// Manejar el envío del formulario
document.getElementById('datos').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar los datos del formulario
    let nombre = document.getElementById('nombre').value;
    let edad = parseInt(document.getElementById('edad').value, 10);
    let altura = parseFloat(document.getElementById('altura').value);
    let genero = document.getElementById('genero').value;

    // Validación
    if (isNaN(edad) || isNaN(altura) || altura <= 0 || edad <= 0) {
        alert('Por favor, ingresa datos válidos.');
        return;
    }
      // Calcular peso ideal basado en el género
      let pesoIdealMin, pesoIdealMax;
      if (genero === 'hombre') {
          pesoIdealMin = 20.5 * (altura / 100) ** 2;
          pesoIdealMax = 25.0 * (altura / 100) ** 2;
      } else if (genero === 'mujer') {
          pesoIdealMin = 19.0 * (altura / 100) ** 2;
          pesoIdealMax = 24.0 * (altura / 100) ** 2;
      }
  
      const resultadoTexto = `Hola, ${nombre}. Para una altura de ${altura} cm, con ${edad} años, y siendo ${genero}, el peso ideal debería estar entre ${pesoIdealMin.toFixed(1)} kg y ${pesoIdealMax.toFixed(1)} kg.`;
      document.getElementById('resultado').textContent = resultadoTexto;  
});

// Manejar el clic en el botón para ver la dieta seleccionada
document.getElementById('verDieta').addEventListener('click', function() {
    const dietaSeleccionada = document.getElementById('dieta-select').value;
    mostrarDieta(dietaSeleccionada);
});
document.getElementById('limpiar').addEventListener('click', function() {
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('dieta').innerHTML = '';
});
