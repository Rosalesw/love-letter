const btnAbrir = document.querySelector("#Abrir");
const contenedor = document.querySelector("#AbrirContenedor");
const tapa = document.querySelector(".superior");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const iconoCorazon = document.querySelector(".bx");
const imagen = document.getElementById("imagenSorpresa");
const mensaje = document.querySelector(".mensaje"); 


function abrirCarta() {
  tapa.classList.add("abrir-superior");

  
  h1.style.transform = "translateY(-120px)";
  p.style.transform = "translateY(-120px)";
  h1.style.transition = "transform 0.65s ease-in-out";
  p.style.transition = "transform 0.65s ease-in-out";

  
  if (iconoCorazon) {
    iconoCorazon.classList.add("bx-rotada");
  }

  
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


btnAbrir?.addEventListener("click", abrirCarta);
contenedor?.addEventListener("click", abrirCarta);

