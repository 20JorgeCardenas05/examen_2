let eventos = [ "desayuno", "comida", "cena", "fiesta", "reunion", "posada", "baile", "peda", "viaje", "pijamada" ];

showDom( "array1", eventos );

const bot1 = document.getElementById("verde");
const bot2 = document.getElementById("rojo");

bot1.addEventListener("click", () => {
    let nuevo = document.getElementById("nuevo").value;
    eventos.push(nuevo);
    document.getElementById("textoo").reset();
    showDom("array1", eventos); // Actualiza la vista del DOM
});

bot2.addEventListener("click", () => {
    eventos.pop();
    showDom("array1", eventos); // Actualiza la vista del DOM
});

function showDom(elemento, arr) {
    let listaHTML = "";
    for (let i = 0; i < arr.length; i++) {
        listaHTML += `<li>${arr[i]}</li>`;
    }
    document.getElementById(elemento).innerHTML = listaHTML;
}
