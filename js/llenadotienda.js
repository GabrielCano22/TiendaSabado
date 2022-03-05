//Arreglo de objetos

//Adjuntar la informacion de 10 productos asociados a la tienda

let productos=[
    {nombre:"Funko pop luffy",
    precio:70000,
    foto:'imgagenesTienda/Producto1.jpg',
    descripcion:"Figura de luffy en kimono"},
    {
    nombre:"Taza carteles",
    precio:52500,
    foto: 'imagenesTienda/Producto2.jpg',
    descripcion:"Taza de carteles de se busca de los integrantes, la cual cambia dependiendo de la temperatura"},
    {
    nombre:"Vasos luffy y ace",
    precio:65800,
    foto: 'imagenesTienda/Producto3.jpg',
    descripcion:"Vasos de vidrio con banderas piratas de luffy y ace"},
    {
    nombre:"Billetera",
    precio:87800,
    foto: 'imagenesTienda/Producto4.jpg',
    descripcion:"Billetera negra de cuero con bandera pirata de luffy"},
    {
    nombre:"Tazón",
    precio:56900,
    foto: 'imagenesTienda/Producto5.jpg',
    descripcion:"Tazon negro con interior rojo el cual tiene la bandera de luffy"},
    {
    nombre:"Cojín",
    precio:87800,
    foto: 'imagenesTienda/Producto6.jpg',
    descripcion:"Cojín negro Con el emblema pirata"},
    {
    nombre:"Llavero",
    precio:43900,
    foto: 'imagenesTienda/Producto7.jpg',
    descripcion:"Llavero one piece piratas sel sombrero de paja"},
    {
    nombre:"Platos",
    precio:109850,
    foto: '../imagenesTienda/Producto8.jpg',
    descripcion:"Platos de diversos logos de grandes piratas"},
    {
    nombre:"Termo",
    precio:56900,
    foto: 'imagenesTienda/Producto9.jpg',
    descripcion:"Termo de viaje negro para poder llevar liquidos a cualquier lugar"},
    {
    nombre:"Mousepad",
    precio:87800,
    foto: 'imagenesTienda/Producto10.jpg',
    descripcion:"Mousepad con el mapa del mundo del anime y con el emblema de los piratas de sombrero de paja"}
       
]
//Recorriendo un arreglo con js
//Buscar/Seleccionar/Esculcar
    productos.forEach(function(producto){
        console.log("Nacional es el mejor")
    })

//Escuchando clic en el boton
let boton=document.getElementById("boton")

//Detectando el primer evento
boton.addEventListener("click",cambiarFoto)

//Creando una función
function cambiarFoto() {
    let foto= document.getElementById("fotoPrueba")
    // foto.src="imagenesTienda/Producto4.jpg"

}

