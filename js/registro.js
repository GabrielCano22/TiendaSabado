import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro = document.getElementById("botonregistro")
let modalInformativo = new bootstrap.Modal(document.getElementById('modalinformativo'))
let bienvenido = document.getElementById("bienvenidauser");

botonregistro.addEventListener("click",function(evento){

    evento.preventDefault()
    console.log("Registrando información")

    let correo = document.getElementById("correo").value
    let password = document.getElementById("password").value



    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        let textoinformativo = document.getElementById("informaciongeneral")
        let formulario=document.getElementById("formularioregistro")
        formulario.reset()
              user.email
        bienvenido.classList.remove("invisible")
        bienvenido.innerHTML=`Bienvenido: ${user.email}  <i class="bi bi-person-video" id="icono"></i>`
        textoinformativo.textContent = "Exito registrandote"
        modalInformativo.show()
        console.log("El registro ha sido un exito")
        setTimeout(function(){
          modalInformativo.hide()
        },2000)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        let textoinformativo = document.getElementById("informaciongeneral")
        textoinformativo.textContent = "Falla: "+errorMessage
        modalInformativo.show()
        console.log("Lamentable pelao, el registro se fue a la mierda")
      });

    })

    window.onload = inicio;
  
    let botonLimpiar = document.getElementById("botonLimpiar")
    botonLimpiar.addEventListener("click",function(remover){
      if("botonLimpiar"){
        correo.classList.add("invisible")
        password.classList.add("invisible")
  }
})





