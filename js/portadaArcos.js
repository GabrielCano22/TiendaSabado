//Agregamos El contenido que va a tener la pagina
let portadas=[
    {foto: "../PortadasArcos/1.png",descripcion:"Volumen 1 «Romance Dawn: Amanecer de una aventura»"},
    {foto: "../PortadasArcos/2.png",descripcion:"Volumen 2 «VERSUS!! los Piratas de Buggy»"},
    {foto: "../PortadasArcos/3.png",descripcion:"Volumen 3 «Aquello lo que no se puede fingir»"},
    {foto: "../PortadasArcos/4.png",descripcion:"Volumen 4 «Luna nueva»"},
    {foto: "../PortadasArcos/5.png",descripcion:"Volumen 5 «Por quien tocan las campanas»"},
    {foto: "../PortadasArcos/6.png",descripcion:"Volumen 6 «Juramento»"},
    {foto: "../PortadasArcos/7.png",descripcion:"Volumen 7 «Viejo de mierda»"},
    {foto: "../PortadasArcos/8.png",descripcion:"Volumen 8 «Yo no voy a morir»"},
    {foto: "../PortadasArcos/9.png",descripcion:"Volumen 9 «Lagrimas»"},
    {foto: "../PortadasArcos/10.png",descripcion:"Volumen 10 «OK, Let's STAND UP!»"},
    {foto: "../PortadasArcos/11.png",descripcion:"Volumen 11 «Los malos del East»"},
    {foto: "../PortadasArcos/12.png",descripcion:"Volumen 12 «La leyenda a comenzado»"},
    {foto: "../PortadasArcos/13.png",descripcion:"Volumen 13 «Estas bien»"},
    {foto: "../PortadasArcos/14.png",descripcion:"Volumen 14 «Instinto»"},
    {foto: "../PortadasArcos/15.png",descripcion:"Volumen 15 «Todo recto»"},
    {foto: "../PortadasArcos/16.png",descripcion:"Volumen 16 «Voluntad heredada»"},
    {foto: "../PortadasArcos/17.png",descripcion:"Volumen 17 «Los cerezos de Hiruluk»"},
    {foto: "../PortadasArcos/18.png",descripcion:"Volumen 18 «Introducción de Ace»"},
    {foto: "../PortadasArcos/19.png",descripcion:"Volumen 19 «Rebelión»"},
    {foto: "../PortadasArcos/20.png",descripcion:"Volumen 20 «Batalla decisiva en Alubarna»"},
    {foto: "../PortadasArcos/21.png",descripcion:"Volumen 21 «Utopía»"},
    {foto: "../PortadasArcos/22.png",descripcion:"Volumen 22 «Esperanza»"},
    {foto: "../PortadasArcos/23.png",descripcion:"Volumen 23 «La aventura de Vivi»"},
    {foto: "../PortadasArcos/24.png",descripcion:"Volumen 24 «El sueño de un hombre»"},
    {foto: "../PortadasArcos/25.png",descripcion:"Volumen 25 «El hombre de los cien millones»"},
    {foto: "../PortadasArcos/26.png",descripcion:"Volumen 26 «Aventura en la isla de Dios»"},
    {foto: "../PortadasArcos/27.png",descripcion:"Volumen 27 «Overture»"},
    {foto: "../PortadasArcos/28.png",descripcion:"Volumen 28 «Wiper el Demonio de la guerra»"},
    {foto: "../PortadasArcos/29.png",descripcion:"Volumen 29 «Oratorio»"},
    {foto: "../PortadasArcos/30.png",descripcion:"Volumen 30 «Capriccio»"},
    {foto: "../PortadasArcos/31.png",descripcion:"Volumen 31 «Estoy aquí»"},
    {foto: "../PortadasArcos/32.png",descripcion:"Volumen 32 «Love song»"},
    {foto: "../PortadasArcos/33.png",descripcion:"Volumen 33 «Davy Back Fight!!»"},
    {foto: "../PortadasArcos/34.png",descripcion:"Volumen 34 «La capital del agua Water 7»"},
    {foto: "../PortadasArcos/35.png",descripcion:"Volumen 35 «Captain»"},
    {foto: "../PortadasArcos/36.png",descripcion:"Volumen 36 «Novena justicia»"},
    {foto: "../PortadasArcos/37.png",descripcion:"Volumen 37 «Tom-san»"},
    {foto: "../PortadasArcos/38.png",descripcion:"Volumen 38 «¡Rocket Man!»"},
    {foto: "../PortadasArcos/39.png",descripcion:"Volumen 39 «Lucha»"},
    {foto: "../PortadasArcos/40.png",descripcion:"Volumen 40 «Gear»"},
    {foto: "../PortadasArcos/41.png",descripcion:"Volumen 41 «Declaración de guerra»"},
    {foto: "../PortadasArcos/42.png",descripcion:"Volumen 42 «Piratas vs. CP9»"},
    {foto: "../PortadasArcos/43.png",descripcion:"Volumen 43 «La leyenda del héroe»"},
    {foto: "../PortadasArcos/44.png",descripcion:"Volumen 44 «Regresemos»"},
    {foto: "../PortadasArcos/45.png",descripcion:"Volumen 45 «Comprendemos como se sienten»"},
    {foto: "../PortadasArcos/46.png",descripcion:"Volumen 46 «Aventura en Thriller Bark»"},
    {foto: "../PortadasArcos/47.png",descripcion:"Volumen 47 «Nublado con algún hueso»"},
    {foto: "../PortadasArcos/48.png",descripcion:"Volumen 48 «La aventura de Oars»"},
    {foto: "../PortadasArcos/49.png",descripcion:"Volumen 49 «Nightmare Luffy»"},
    {foto: "../PortadasArcos/50.png",descripcion:"Volumen 50 «Alcanzarlo una vez más»"},
    {foto: "../PortadasArcos/51.png",descripcion:"Volumen 51 «Los Once Supernovas»"},
    {foto: "../PortadasArcos/52.png",descripcion:"Volumen 52 «Roger y Rayleigh»"},
    {foto: "../PortadasArcos/53.png",descripcion:"Volumen 53 «Aptitud de rey»"},
    {foto: "../PortadasArcos/54.png",descripcion:"Volumen 54 «Ya nadie puede detener esto»"},
    {foto: "../PortadasArcos/55.png",descripcion:"Volumen 55 «Okama en el infierno»"},
    {foto: "../PortadasArcos/56.png",descripcion:"Volumen 56 «Gracias»"},
    {foto: "../PortadasArcos/57.png",descripcion:"Volumen 57 «Batalla decisiva en la cumbre»"},
    {foto: "../PortadasArcos/58.png",descripcion:"Volumen 58 «El nombre de esta era es Barbablanca»"},
    {foto: "../PortadasArcos/59.png",descripcion:"Volumen 59 «Portgas D. Ace muere»"},
    {foto: "../PortadasArcos/60.png",descripcion:"Volumen 60 «Mi hermano»"},
    {foto: "../PortadasArcos/61.png",descripcion:"Volumen 61 «Romance Dawn: Amanecer de una aventura en un Nuevo Mundo»"},
    {foto: "../PortadasArcos/62.png",descripcion:"Volumen 62 «Aventura en la Isla Gyojin»"},
    {foto: "../PortadasArcos/63.png",descripcion:"Volumen 63 «Otohime y Tiger»"},
    {foto: "../PortadasArcos/64.png",descripcion:"Volumen 64 «100.000 vs. 10»"},
    {foto: "../PortadasArcos/65.png",descripcion:"Volumen 65 «Desde Cero»"},
    {foto: "../PortadasArcos/66.png",descripcion:"Volumen 66 «Hacia adelante, hacia el sol»"},
    {foto: "../PortadasArcos/67.png",descripcion:"Volumen 67 «COOL FIGHT»"},
    {foto: "../PortadasArcos/68.png",descripcion:"Volumen 68 «Alianza Pirata»"},
    {foto: "../PortadasArcos/69.png",descripcion:"Volumen 69 «SAD»"},
    {foto: "../PortadasArcos/70.png",descripcion:"Volumen 70 «Aparece Doflamingo»"},
    {foto: "../PortadasArcos/71.png",descripcion:"Volumen 71 «Coliseo de rufianes»"},
    {foto: "../PortadasArcos/72.png",descripcion:"Volumen 72 «Los olvidados de Dressrosa»"},
    {foto: "../PortadasArcos/73.png",descripcion:"Volumen 73 «Operación Dressrosa S.O.P.»"},
    {foto: "../PortadasArcos/74.png",descripcion:"Volumen 74 «Siempre estaré a tu lado»"},
    {foto: "../PortadasArcos/75.png",descripcion:"Volumen 75 «Mi retribución»"},
    {foto: "../PortadasArcos/76.png",descripcion:"Volumen 76 «Avanza sin preocupación»"},
    {foto: "../PortadasArcos/77.png",descripcion:"Volumen 77 «Smile»"},
    {foto: "../PortadasArcos/78.png",descripcion:"Volumen 78 «El carisma del mal»"},
    {foto: "../PortadasArcos/79.png",descripcion:"Volumen 79 «¡¡Lucy!!»"},
    {foto: "../PortadasArcos/80.png",descripcion:"Volumen 80 «Declaración de inicio»"},
    {foto: "../PortadasArcos/81.png",descripcion:"Volumen 81 «Vamos a ver al Señor Nekomamushi»"},
    {foto: "../PortadasArcos/82.png",descripcion:"Volumen 82 «Un mundo enardecido»"},
    {foto: "../PortadasArcos/83.png",descripcion:"Volumen 83 «La pirata «Emperatriz» Charlotte Linlin»"},
    {foto: "../PortadasArcos/84.png",descripcion:"Volumen 84 «Luffy vs. Sanji»"},
    {foto: "../PortadasArcos/85.png",descripcion:"Volumen 85 «Mentiroso»"},
    {foto: "../PortadasArcos/86.png",descripcion:"Volumen 86 «Complot para asesinar a uno de los Cuatro Emperadores»"},
    {foto: "../PortadasArcos/87.png",descripcion:"Volumen 87 «No tan dulce»"},
    {foto: "../PortadasArcos/88.png",descripcion:"Volumen 88: «León»"},
    {foto: "../PortadasArcos/89.png",descripcion:"Volumen 89: «BADEND MUSICAL»"},
    {foto: "../PortadasArcos/90.png",descripcion:"Volumen 90: «La tierra sagrada Mary Geoise»"},
    {foto: "../PortadasArcos/91.png",descripcion:"Volumen 91: «Aventura en la tierra de los samurái»"},
    {foto: "../PortadasArcos/92.png",descripcion:"Volumen 92: «Presentación de la oiran Komurasaki»"},
    {foto: "../PortadasArcos/93.png",descripcion:"Volumen 93: «El más amado del pueblo Ebisu»"},
    {foto: "../PortadasArcos/94.png",descripcion:"Volumen 94: «Los sueños de los guerreros»"},
    {foto: "../PortadasArcos/95.png",descripcion:"Volumen 95: «Las aventuras de Oden»"},
    {foto: "../PortadasArcos/96.png",descripcion:"Volumen 96: «Soy Oden y nací para hervir»"},
    {foto: "../PortadasArcos/97.png",descripcion:"Volumen 97: «Mi biblia»"},
    {foto: "../PortadasArcos/98.png",descripcion:"Volumen 98: «Vasallos gloriosos»"},
    {foto: "../PortadasArcos/99.png",descripcion:"Volumen 99: «Luffy Sombrero de Paja»"},
    {foto: "../PortadasArcos/100.png",descripcion:"Volumen 100: «Haoshoku»"},
    {foto: "../PortadasArcos/101.png",descripcion:"Volumen 101: «Las estrellas llegan al escenario»"}
    
]

let volumenes = document.getElementById("fila")

    portadas.forEach(function(portada){
        console.log(portada.foto)
        console.log(portada.descripcion)

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let foto = document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src = portada.foto

        let descripcionPortada = document.createElement("div")
        descripcionPortada.classList.add("card-body")

        let descripcion = document.createElement("h5")
        descripcion.classList.add("card-text")
        descripcion.textContent = portada.descripcion


        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        tarjeta.appendChild(descripcionPortada)
        descripcionPortada.appendChild(descripcion)
        
    })