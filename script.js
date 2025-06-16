const btnAbrir = document.querySelector("#Abrir");
const contenedor = document.querySelector("#AbrirContenedor");
const tapa = document.querySelector(".superior");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const iconoCorazon = document.querySelector(".bx");
const imagen = document.getElementById("imagenSorpresa");
const mensaje = document.querySelector(".mensaje"); // Asegúrate que esta clase exista en tu HTML/CSS

// Función para abrir la carta
function abrirCarta() {
  tapa.classList.add("abrir-superior");

  // Animar el título y subtítulo
  h1.style.transform = "translateY(-120px)";
  p.style.transform = "translateY(-120px)";
  h1.style.transition = "transform 0.65s ease-in-out";
  p.style.transition = "transform 0.65s ease-in-out";

  // Animar el icono (si existe)
  if (iconoCorazon) {
    iconoCorazon.classList.add("bx-rotada");
  }

  // Mostrar mensaje y la imagen luego del giro
  setTimeout(() => {
    tapa.style.zIndex = -1;
    if (mensaje) {
      mensaje.classList.add("abrir-mensaje");
    }
    if (imagen) {
      imagen.style.display = "block";
    }
  }, 700);
}

// Eventos
btnAbrir?.addEventListener("click", abrirCarta);
contenedor?.addEventListener("click", abrirCarta);
