const inicio = new Date("2021-06-25T00:00:00");

function actualizarContador(){

    const ahora = new Date();

    const diferencia = ahora - inicio;

    const dias = Math.floor(diferencia / (1000*60*60*24));
    const horas = Math.floor(diferencia / (1000*60*60));
    const minutos = Math.floor(diferencia / (1000*60));
    const segundos = Math.floor(diferencia / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();


//============================
// MÚSICA
//============================

const musica = document.getElementById("musica");

document.getElementById("startButton").onclick = function(){

    musica.play();

    document.querySelector(".contador").scrollIntoView({

        behavior:"smooth"

    });

}
//==========================
// SLIDER
//==========================

const fotos = [

{
    img:"img/foto6.jpg",
    titulo:"Cita",
    texto:"Contigo cualquier lugar se convierte en mi sitio favorito."
},

{
    img:"img/foto1.jpg",
    titulo:"Tetuán",
    texto:"No importaba el lugar... solo seguir mirándote así."
},

{
    img:"img/foto2.jpg",
    titulo:"Madrid",
    texto:"Los mejores momentos siempre son contigo."
},

{
    img:"img/foto3.jpg",
    titulo:"Nuestro hogar",
    texto:"No abrimos solo una puerta... empezamos una nueva vida, pero siempre a tu lado."
},

{
    img:"img/foto4.jpg",
    titulo:"Firma",
    texto:"Cada ilusión compartida hace nuestro camino más bonito."
},

{
    img:"img/foto5.jpg",
    titulo:"París",
    texto:"La ciudad del amor... aunque el amor ya viajaba conmigo."
},

{
    img:"img/foto7.jpg",
    titulo:"Nueva York",
    texto:"Un sueño más cumplido, juntos."
},

{
    img:"img/foto8.jpg",
    titulo:"Nueva York",
    texto:"Miles de luces... pero ninguna brillaba más que tu sonrisa."
},

{
    img:"img/foto9.jpg",
    titulo:"Siempre juntos",
    texto:"Prometo seguir sujetando tu mano durante toda la vida."
}

];

let actual = 0;

const imagen = document.getElementById("sliderImage");
const titulo = document.getElementById("tituloFoto");
const texto = document.getElementById("textoFoto");

function cargarFoto(){

    imagen.style.opacity=0;

    setTimeout(()=>{

        imagen.src=fotos[actual].img;
        titulo.innerHTML=fotos[actual].titulo;
        texto.innerHTML=fotos[actual].texto;

        imagen.style.opacity=1;

    },300);

}

document.querySelector(".next").onclick=function(){

    actual++;

    if(actual>=fotos.length)
        actual=0;

    cargarFoto();

}

document.querySelector(".prev").onclick=function(){

    actual--;

    if(actual<0)
        actual=fotos.length-1;

    cargarFoto();

}

// Cambio automático cada 5 segundos
setInterval(()=>{

    actual++;

    if(actual>=fotos.length)
        actual=0;

    cargarFoto();

},5000);
