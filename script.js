// Listas de textos
const listaParrafos1 = [
  "Nos encontramos sin vernos,",
  "Te extraña todo lo que no existe sin tu cuerpo",
  "Lìneas azules de contrabando,",
  "Tratan de formar tu rostro,",
  "Voy a ser un elemento,",
  "Un simple carnaval de ideas,",
  "Gritarte un montón de estrellas,",
  "Quiero dejarte entera.",
  ]

const listaParrafos2 = [  "Cantarte espacios,",
  "transvestir tu nombre,",
  "hasta que se vuelva nuevo,",
  "el movimiento de nuestras almas,",
  "por nuestros cuerpos,",
  "quiero venderle algo de ti a la noche,",
  "las intimidades,",
  "me canse de imitar tu alma,",
  "grietas tímidas te esperan,"
]

const listaParrafos3 = [  "que ya no saben que hacer conmigo.",
  "al sueño mas ambiguo.",
  "y al mundo donde te perteneces.",
  "en un trozo de papel.",
  "y la noche se desnude junto a tu cuerpo.",
  "para que vuelvas a brillar."
]



// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const parrafo1 = document.getElementById("miparrafo");
const parrafo2 = document.getElementById("miparrafo2");
const parrafo3 = document.getElementById("miparrafo3");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let parrafo1Aleatorio;
let parrafo2Aleatorio;
let parrafo3Aleatorio;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  parrafo1Aleatorio = numeroAleatorio(0, listaParrafos1.length);
  parrafo2Aleatorio = numeroAleatorio(0, listaParrafos2.length);
  parrafo3Aleatorio = numeroAleatorio(0, listaParrafos3.length);

  // Asignamos la nueva fuente (source) a cada imagen
  parrafo1.innerText = listaParrafos1[parrafo1Aleatorio];
  parrafo2.innerText = listaParrafos2[parrafo2Aleatorio];
  parrafo3.innerText = listaParrafos3[parrafo3Aleatorio];

  if(parrafo1Aleatorio == parrafo2Aleatorio && parrafo2Aleatorio == parrafo3Aleatorio){
  consol.log("son iguales");
  boton.style.backgroundColor = "red";
}

  console.log(parrafo1Aleatorio, parrafo2Aleatorio, parrafo3Aleatorio);
}



// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
