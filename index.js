const JSON = 
    [
        {
            "titulo":"Proyecto - Tienda nike",
            "subtitulo": "Pagina web",
            "img": "nikeproyect.jpg",
            "cardtitulo": "Replica de Tienda Nike",
            "cardinfo": "Replica de la pagina de nike de estados unidos.",
            "probarpag": "https://nicolasfigueredoo.github.io/WebFigueredoJS/index.html"
        }
        ,{
          "titulo":"Pagina web Peliculas",
          "subtitulo": "REACT",
          "img": "movie1.jpg",
          "cardtitulo": "Pagina Web de Peliculas",
          "cardinfo": "Esta pagina solo la use para hacer funcionar el codigo react, la web es una base la funcion la hice yo con react, todavia no puedo encontrar la forma de subirla a la red",
          "probarpag": "Proximamente"
        },
        {
          "titulo":"Proyecto - Cajero automatico",
          "subtitulo": "JavaScript",
          "img": "atm.jpg",
          "cardtitulo": "Cajero Automatico",
          "cardinfo": "un cajero automatico donde puedes sacar cantidad y agregar cantidad",
          "probarpag": "https://nicolasfigueredoo.github.io/ATMcajero/"
      },
        {
          "titulo":"Proyecto - bloc de notas",
          "subtitulo": "JavaScript storage",
          "img": "notas.jpg",
          "cardtitulo": "Bloc de notas",
          "cardinfo": "una pagina web donde puedes guardar notas o escribir una novela",
          "probarpag": "https://nicolasfigueredoo.github.io/notas0.1/"
      }
        ,{
            "titulo":"Proyecto - Calculadora",
            "subtitulo": "JavaScript Puro",
            "img": "calculadora.png",
            "cardtitulo": "Calcular Cuentas Basicas",
            "cardinfo": "Una calculadora echa con JavaScript con animaciones",
            "probarpag": "https://nicolasfigueredoo.github.io/CalculatorVersion-0.1/"
        },
        {
            "titulo":"Nightdrive - Tienda",
            "subtitulo": "Pagina Web",
            "img": "Sin título.png",
            "cardtitulo": "Tienda Nightdrive Basic",
            "cardinfo": "Nightdrive es un grupo de personas aficionadas por los autos japones, crearon un emprendimiento de vender calcomanias, decidieron llevarlo al entorno virtual creamos esta pagina para una vista profesional y poder llegar a mas partes del mundo.",
            "probarpag": "https://nicolasfigueredoo.github.io/NGT/"

        },
        {
            "titulo":"Proyecto - Dibuja con el mouse",
            "subtitulo": "JavaScript puro",
            "img": "creador de lineas.png",
            "cardtitulo": "Paint",
            "cardinfo": "En este sitio podras dibujar lo que quieras, podras elegir el ancho de tu brocha y el color",
            "probarpag": "https://nicolasfigueredoo.github.io/holaque/"

        },
        {
            "titulo":"Proyecto - Creador de Lineas",
            "subtitulo": "JavaScript Puro",
            "img": "creador de lineas .png",
            "cardtitulo": "Creador de lineas",
            "cardinfo": "En este sitio hice un codigo en cual podes poner el numero de lineas que quieres que aparezca sobre el lienzo",
            "probarpag": "https://nicolasfigueredoo.github.io/tutorial-paghes/"
        },
        {
            "titulo":"Proyecto - Calculadora de peso",
            "subtitulo": "JavaScript Puro",
            "img": "planetas .png",
            "cardtitulo": "Tu peso en otro planeta",
            "cardinfo": "En este sitio podras Calcular tu peso en otro planeta como en Jupiter o Martes.",
            "probarpag": "https://nicolasfigueredoo.github.io/planet/"
        }

    ]



function Proyectos(){
    for(let c of JSON){
$("#proyectos").append(`
    <div class="col">
    <div class="card d">
      <div class="contenedor">
        <figure>
          <img src="./assets/img/${c.img} " class="h card-img-top" alt="#">
          <div class="capa">
            <p id="title">${c.titulo}</p>
            <p>${c.subtitulo} </p>
        </div>
         </figure>
      </div>
      <div class="card-body">
        <h5 class="card-title">${c.cardtitulo} </h5>
        <p class="card-text">${c.cardinfo}</p>
      </div>
      <div class="card-footer">
        <a href="${c.probarpag} " target="_blank"><button>Probar</button></a>

      </div>
    </div>
  </div>`    )
}

}


function AnimacionInicial(){
 $("#titulo").animate({
    marginLeft: "200px",
    transition: "5s"
  })

}


window.addEventListener("scroll", function(){
  let animacion = document.getElementById("titulo")
  let posicionObj = animacion.getBoundingClientRect().top

  let animaciondos = document.getElementById("animacion")
  let posicionObj2 = animaciondos.getBoundingClientRect().top

  let tamañoWindow = window.innerHeight / 3


  if(posicionObj < tamañoWindow){
      
    $(".imagenes").animate({
      paddingRight: "0px",
      transition: "1s"
    })
  }

  if(posicionObj2 < tamañoWindow){
    $(".card").animate({
      width: "600px",
      transition: "0.6s"
    })
  }
})


AnimacionInicial()
Proyectos()