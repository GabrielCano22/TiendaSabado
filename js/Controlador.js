//Importando 
import { pintarTienda } from "./llenadotienda.js";
import {ampliarInformacion}from "./ampliarInfo.js";
import {pintarCarrito} from"./pintarCarrito.js";

//Crear un producto vacio
 let producto={}

//Llamando al módulo de pintar
pintarTienda()

//Llamando al módulo de ampliar imformación del producto
let contenedorTienda = document.getElementById("fila")
contenedorTienda.addEventListener("click",function (event){

     if(event.target.classList.contains("btn")){
          let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
          producto=ampliarInformacion(event) 
          console.log(producto)    
          modalinfoproducto.show()
      }

})

//Detectar la accion de añadir al carrito

//Carrito es un arreglo de productos
let carrito=[]
let modalVenta

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){

     //1 capturar la cantidad del producto
     let cantidad = document.getElementById("cantidadProducto").value
     let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))

     //capturar el subtotal de los productos

     //2 Agrego la cantidad al objeto producto
     producto.cantidad = cantidad; 
     console.log(producto)

     producto.total = cantidad * producto.precio;
     //3 Agregar el producto al carrito
     carrito.push(producto)

     //4 Calculo la sumatoria de cantidades

     let suma =0
     let totalCompra =0
     carrito.forEach(function(producto){
          suma = suma+Number(producto.cantidad)
          pintarCarrito(suma)

     })

     //Calcular el subtotal de los productos
     let subtotal =0
     carrito.forEach(function(precio){
          subtotal = subtotal+Number(producto.total)
     })

     //Limpiar Carrito
     let botonRemove = document.getElementById("botonRemove")
     botonRemove.addEventListener("click",function(){
          carrito=[]
          let numeros = document.getElementById("numeros")
          numeros.textContent = 0
          numeros.classList.add("invisible")
          let total = document.getElementById("total").textContent=""

     })
})

     //Ver resumen de venta
     let botonCarrito = document.getElementById("icono")
     botonCarrito.addEventListener("click",function(){
           modalVenta = new bootstrap.Modal(document.getElementById('resumenCarrito'))
           let contenedor = document.getElementById("contenedorVenta")
           let totalCompra = document.getElementById("total")
          contenedor.innerHTML=""
          let Resultado = 0
          let Dolar = 0
          if(carrito.length ==0){
                              
                let fila = document.createElement("div")
                fila.classList.add("row")

                let imagen = document.createElement("img")
                imagen.classList.add("img-fluit","w-1%","h-1%")
                imagen.src = ("../img/empty_cart.png")  
                
                let mensaje = document.createElement("h3")
                mensaje.classList.add("card-text")
                mensaje.textContent="Por favor agregue productos para poder comprar"
          
                fila.appendChild(imagen)
                contenedor.appendChild(fila)
                fila.appendChild(mensaje)

          }
           else{
                
                //Recorrer el carrito para pintar los productos en la factura
                carrito.forEach(function(producto){
     
                     //traversing
                     let fila = document.createElement("div")
                     fila.classList.add("row")
     
                     let columna1=document.createElement("div")
                     columna1.classList.add("col-12","col-md-4")
     
                     let columna2=document.createElement("div")
                   columna2.classList.add("col-12","col-md-8")
     
                   let foto = document.createElement("img")
                   foto.classList.add("img-fluid","w-100")
                   foto.src = producto.foto
     
                   let nombre=document.createElement("h5")
                   nombre.classList.add("card-title")
                   nombre.textContent = producto.nombre
     

                   let precio=document.createElement("h5")
                   precio.classList.add("card-text")
                   precio.textContent=producto.precio
     
                   let cantidad = document.createElement("p")
                   cantidad.classList.add("card-text")
                   cantidad.textContent="cantidad: "+producto.cantidad
        
                   let subtotal = document.createElement("p")
                   subtotal.classList.add("card-text")
                   subtotal.textContent= "El subtotal de éste artiulo es: "+producto.total
                   let divisiones = document.createElement("p")
                   divisiones.classList.add("card-text")
                   divisiones.textContent= "____________________________________________________________________"
     
                   Resultado = Resultado + producto.cantidad*producto.precio
                   Dolar = Resultado / 3950
                   totalCompra.textContent= "El total de la compra de los productos es: $"+Resultado

                   //Padres e hijos
                   columna1.appendChild(foto)
                   fila.appendChild(columna1)
                   fila.appendChild(columna2)
                   contenedor.appendChild(fila)
                   columna2.appendChild(nombre)
                   columna2.appendChild(cantidad)
                   columna2.appendChild(precio)
                   columna2.appendChild(subtotal)
                   fila.append(divisiones)
                    
     
     
                })
           }
               
               
               
               let botonDolar = document.getElementById("botonDolar")
               botonDolar.addEventListener("click",function(){
                    if ("botonDolar"){
                         totalCompra.textContent="El total de la compra de los productos es: $"+Dolar.toFixed(2)
                    }
                    else{
                         totalCompra.textContent= "El total de la compra de los productos es: $"+Resultado
                    }
               })
               let botonPesos = document.getElementById("botonPesos")
               botonPesos.addEventListener("click",function(){
                    if ("botonPesos"){
                         totalCompra.textContent= "El total de la compra de los productos es: $"+Resultado
                    }
                    else{
                         totalCompra.textContent="El total de la compra de los productos es: $"+Dolar.toFixed(2)
                    }
               })
          //Borrar el contenido html de una seccion
     
         modalVenta.show()
     })
