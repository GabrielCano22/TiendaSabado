export function ampliarInformacion(event) {
    
    let producto={}
    if(event.target.classList.contains("btn")){
    
        producto={
            foto:event.target.parentElement.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h5").textContent,
            descripcion:event.target.parentElement.querySelector("p").textContent,
            precio:event.target.parentElement.querySelector("h4").textContent
        }
        console.log(producto)

        let foto = document.getElementById("fotoinfo")
        foto.src=producto.foto
        let nombre = document.getElementById("nombreinfo")
        nombre.textContent=producto.nombre
        let descripcion = document.getElementById("nombredescripcion")
        descripcion.textContent = producto.descripcion
        let precio = document.getElementById("precioinfo")
        precio.textContent = producto.precio

        return producto
        
    }

}


