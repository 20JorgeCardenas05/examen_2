const eventos = [ "desayuno", "comida", "cena", "fiesta", "reunion", "posada", "baile", "peda", "viaje", "pijamada" ];

showDom( "array1", eventos );

const bot1 = document.getElementById("verde");

bot1.addEventListener( "click", () => {
    let nuevo = document.getElementById( "nuevo" ).value;
    eventos.push( nuevo );
    document.getElementById("textoo").reset();
} );


function showDom(elemento, arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(elemento).innerHTML +=
            `<li>${arr[i]}</li>`;
    }
}

// document.getElementById( "lis" ).innerHTML = eventos;