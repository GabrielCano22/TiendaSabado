export function pintarTienda() {
    let productos=[
        {nombre:"Funko pop luffy",
        precio:70000,
        foto:'../imagenesTienda/Producto1.jpg',
        descripcion:"Figura de luffy en kimono"},
        {
        nombre:"Taza carteles",
        precio:52500,
        foto: '../imagenesTienda/Producto2.jpg',
        descripcion:"Taza de carteles de se busca de los integrantes, la cual cambia dependiendo de la temperatura"},
        {
        nombre:"Vasos luffy y ace",
        precio:65800,
        foto: '../imagenesTienda/Producto3.jpg',
        descripcion:"Vasos de vidrio con banderas piratas de luffy y ace"},
        {
        nombre:"Billetera",
        precio:87800,
        foto: '../imagenesTienda/Producto4.jpg',
        descripcion:"Billetera negra de cuero con bandera pirata de luffy"},
        {
        nombre:"Tazón",
        precio:56900,
        foto: '../imagenesTienda/Producto5.jpg',
        descripcion:"Tazon negro con interior rojo el cual tiene la bandera de luffy"},
        {
        nombre:"Cojín",
        precio:87800,
        foto: '../imagenesTienda/Producto6.jpg',
        descripcion:"Cojín negro Con el emblema pirata"},
        {
        nombre:"Llavero",
        precio:43900,
        foto: '../imagenesTienda/Producto7.jpg',
        descripcion:"Llavero one piece piratas del sombrero de paja"},
        {
        nombre:"Platos",
        precio:109850,
        foto: '../imagenesTienda/Producto8.jpg',
        descripcion:"Platos de diversos logos de grandes piratas"},
        {
        nombre:"Termo",
        precio:56900,
        foto: '../imagenesTienda/Producto9.jpg',
        descripcion:"Termo de viaje negro para poder llevar liquidos a cualquier lugar"},
        {
        nombre:"Mousepad",
        precio:87800,
        foto: '../imagenesTienda/Producto10.jpg',
        descripcion:"Mousepad con el mapa del mundo del anime y con el emblema de los piratas de sombrero de paja"}
           
    ]
    
    //Creo la referencia al componente padre
    //Creo una variable para almacenar la base
    //Sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    
    
    //Recorriendo un arreglo con js
    //Buscar/Seleccionar/Esculcar
        productos.forEach(function(producto){

    
            //Receta para pintar con js
    
            //1. Comience a crear la estructura que necesite
    
            //Creo la columna
            let columna=document.createElement("div")
            columna.classList.add("col")
    
            //Creo la tarjeta
            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card")
            tarjeta.classList.add("h-100")
            
            //Creo la imagen
            let foto=document.createElement("img")
            foto.classList.add("card-img-top")
            foto.src= producto.foto
    
            //Cuerpo del producto
            let cuerpoProducto = document.createElement("div")
            cuerpoProducto.classList.add("card-body")        
    
            //Agrego el nombre
            let nombre=document.createElement("h5")
            nombre.classList.add("card-title")
            nombre.textContent = producto.nombre
    
            //Agrego la descripción del producto
            let descripcion=document.createElement("p")
            descripcion.classList.add("card-text")
            descripcion.textContent= producto.descripcion
    
            //Agrego el precio
            let precio=document.createElement("h4")
            precio.classList.add("card-tittle")
            precio.textContent=producto.precio
            

            //Creando un botón
            let boton = document.createElement("button")
            boton.setAttribute("type","button")
            boton.classList.add("btn","btn-primary","mx-4","mb-4")
            boton.textContent = "Ver Producto"

            //2. Ordenar la estructura
            //Padres e hijos
    
            tarjeta.appendChild(foto)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
            tarjeta.appendChild(cuerpoProducto)
            cuerpoProducto.appendChild(nombre)
            cuerpoProducto.appendChild(descripcion)
            cuerpoProducto.appendChild(precio)
            cuerpoProducto.appendChild(boton)
            
    
    
        })
    
    //Escuchando clic en el boton
    let boton=document.getElementById("boton")
    
    //Detectando el primer evento
    // boton.addEventListener("click",cambiarFoto)
    
    //Creando una función
    function cambiarFoto() {
        let foto= document.getElementById("fotoPrueba")
    
    }
    
    
    
}

//Arreglo de objetos

//Adjuntar la informacion de 10 productos asociados a la tienda

