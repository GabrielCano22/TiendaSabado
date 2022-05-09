export function pintarCarrito(suma){
    let numeros = document.getElementById("numeros")
    numeros.textContent=suma
    numeros.classList.remove("invisible")

}