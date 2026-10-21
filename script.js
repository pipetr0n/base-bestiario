// Listas de imágenes
const listaCabezas = [
  <p>
     Nos encontramos sin vernos,
        Te extraña todo lo que no existe sin tu cuerpo,
        Líneas azules de contrabando,
        Tratan de formar tu rostro,
        Voy a ser un elemento,
        Un simple carnaval de ideas,
        Gritarte un montón de estrellas,
        Quiero dejarte entera, 
   
  </p>
 ];
const listaTroncos = [
   <p>
cantarte espacios,
transvestir tu nombre,
hasta que se vuelva nuevo,
el movimiento de nuestras almas,
por nuestros cuerpos,
quiero venderle algo de ti a la noche,
las intimidades,
me canse de imitar tu alma,
grietas tímidas te esperan,
    
   
  </p>
];
const listaPatas = [
  <p>
que ya no saben que hacer conmigo.
al sueño mas ambiguo.
y al mundo donde te perteneces.
en un trozo de papel.
y la noche se desnude junto a tu cuerpo.
para que vuelvas a brillar.
</p>
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.innerText =listaCabezas[cabezaAleatorio]; //ruta + listaCabezas[cabezaAleatorio]; //cabeza.innerText = listaCabezas[cabezaAleatorio];
  tronco.innerText =listaTroncos[troncoAleatorio];
  patas.innerText = listaPatas[patasAleatorio];

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
