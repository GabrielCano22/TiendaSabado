//  //Comentario en linea

// // /*Comentarios en bloque */

// // //Variables
//      let nombreDeUsuario = "Gabriel"
//      let estaturaDeUsuario = 1.70
//      let edad = 17
//      let telefonoDeUsuario = "3122093137"
//      let esPaisa = false //(Banderas)

// //     //Constantes
//      const APELLIDOS_DE_USUARIO = "Cano Oquendo"

// //     //Concatenar
//       //   console.log("Buenas tardes "+ nombreDeUsuario + " Su edad es:"+ edad )

// //     // console.log(`Buenas tardes ${nombreDeUsuario} su edad es: ${edad}`)

// //     //Utilizando el dom
//     // let etiquetaTitulo = document.getElementById("titulo")
//     // etiquetaTitulo.textContent="Solo verde a morir"
//     // etiquetaTitulo.classList.add("text-success")
//     // etiquetaTitulo.classList.add("text-center")

//     //  let etiquetaNav = document.getElementById("num1")
//     //  etiquetaNav.textContent= "One piece"
    
//     //  let imagenamongus = document.getElementById("spideramongus")
//     //  imagenamongus.src="img/Spiderman3.jpg"

//     // Get the modal

//Importando 
import { pintarTienda } from "./llenadotienda.js";
import {ampliarInformacion}from "./ampliarInfo.js";

//Llamando al módulo de pintar
pintarTienda()

//Llamando al módulo de ampliar imformación del producto
let contenedorTienda = document.getElementById("fila")
contenedorTienda.addEventListener("click",function (event){

     if(event.target.classList.contains("btn")){
          console.log("Estoy haciendo clic en el boton")
          let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
          ampliarInformacion(event)     
          modalinfoproducto.show()
      }

})