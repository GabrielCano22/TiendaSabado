
let contenedorFrutas = document.getElementById("paramecia")
contenedorFrutas.addEventListener("click",function (event){

     if(event.target.classList.contains("btn")){
          let modalfrutas = new bootstrap.Modal(document.getElementById('modalfrutas'))
          modalfrutas.show()
      }

})
let contenedorMera = document.getElementById("logia")
contenedorMera.addEventListener("click",function (event){

     if(event.target.classList.contains("btn")){
          console.log("Estoy haciendo clic en el boton")
          let modalmera = new bootstrap.Modal(document.getElementById('modalmera'))
          modalmera.show()
      }

})
let contenedorZoan = document.getElementById("zoan")
contenedorZoan.addEventListener("click",function (event){

     if(event.target.classList.contains("btn")){
          console.log("Estoy haciendo clic en el boton")
          let modalzoan = new bootstrap.Modal(document.getElementById('modalzoan'))
          modalzoan.show()
      }

})