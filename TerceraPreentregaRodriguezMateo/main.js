class productos {
    constructor(id,producto, marca, color, precio, imagen){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.producto = producto,
        this.marca = marca,
        this.color = color,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarProducto(){
        console.log(`El producto es ${this.producto}, la marca es ${this.marca}, su color es ${this.color} y su precio es ${this.precio}`)
    }
}
// Creacion de catalogo
const producto1 = new productos(1,"Luz de colores", "3dmagic","multicolor", 2500,"luzcolor.jpg")
const producto2 = new productos(2,"Lampara", "planeta","morado", 3500,"luzplaneta.jpg")
const producto3 = new productos(3,"Iman Argentina", "san juan","blanco", 200,"iman.jpg")
const producto4 = new productos(4,"Lapicera", "cross","negro", 1900,"lapicera.jpg")
const producto5 = new productos(5,"Alfombrilla", "trust","rojo", 1200,"alfombrilla.jpg")
const producto6 = new productos(6,"Portacelular", "3dmagic","blanco", 600,"portacelu.jpg")
const producto7 = new productos(7,"Vaso termico", "keep","gris metalizado", 1200,"vaso.jpg")
const producto8 = new productos(8,"Mate", "keep","marron", 1200,"mate.jpg")
const producto9 = new productos(9,"Masajeador", "superlife","verde", 1700,"masajes.jpg")
const producto10 = new productos(10,"termo", "Stanley","verde", 5000,"stanley.jpg")

// muestra de catalogo en consola
const catalogo = [producto1, producto2, producto3, producto4,producto5, producto6, producto7, producto8, producto9, producto10]
//console.log(catalogo)

function verCatalogo(array){
    for(let productos of array){
        console.log(`El ${productos.producto} de la marca ${productos.marca} vale $${productos.precio}`)
    }
}
function mostrarCatalogo(array){
    
    array.forEach( 
        
        (productos) => {
            
            productos.mostrarProducto()
            
        }
    )
}
//mostrarCatalogo(catalogo);

//Muestra el producto buscado en consola
function buscarProducto(array){
    let poductoBuscado = prompt("Ingrese el producto que desea buscar")
    
    let productoEncontrado = array.find(
        (productos)=> productos.producto.toLowerCase() == poductoBuscado.toLowerCase()
        )
    if(productoEncontrado == undefined){
        console.log(`Lo sentimos el ${poductoBuscado} no se encuenta en nuestro catalogo`)
    }else{
        console.log(productoEncontrado)
    }
}
// Por ahora no vamos a usar este codigo
// funcion para ordenar el catalogo de mayor a menor
//function ordenarMayorAMenor(array){
  //  console.log(array.sort((a,b) => (b.precio - a.precio)))
//}
 

// funcion para ordenar el catalogo de menor a mayor
function catalogoMenorAMayor(array){
    console.log(array.sort((a,b) => ( a.precio - b.precio)))
}
function comentarios(){
prompt("ingrese su comentario aqui")
alert(`gracias por su comentario :) esperamos que vuelva pronto 💝 `)
}
function preguntas(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver el catalogo de productos
                        2 - Tabla de productos
                        3 - Buscar producto
                        4 - Ordenar por precio menor a mayor 
                        5 - Dejar un comentario 
                        0 - Para salir
                        `))
    menu(opcion)
}
//function menu(opcionSeleccionada){
  //  switch(opcionSeleccionada){
    //    case 0:
        //    salir = true
      //      alert(`Gracias por entrar a nuestra tienda, esperamos que vuelva pronto`)
        //break    
        // case 1:
          //  verCatalogo(catalogo)
        // break 
        //case 2: 
          //  console.table(catalogo)
      	// break 
   	    // case 3: 
           // buscarProducto(catalogo)  
      	// break
        // case 4: 
        // catalogoMenorAMayor(catalogo)
      	// break
        // case 5: 
       //  comentarios()
      	// break 
   	   //  default: 
      	// alert(`Ingrese una opción correcta`)
   //  }
// }


 // let salir = false
// if(salir!=true){
//   preguntas()
 // }
 let productosEnCarrito = []
 if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    console.log("Seteando el array carrito por primera vez")
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}
let divProductos = document.getElementById("productos")

let buscador = document.getElementById("buscador")
let modalBody = document.getElementById("modal-body")
let botonCarrito = document.getElementById("botonCarrito")

 
 
//cards de productos
 let regalos = document.getElementById("regalos")
 for(let productos of catalogo){
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML = `<article id="${productos.producto}" class="card">
    <h3 class="tituloCard">${productos.producto}</h3>
    <img class ="cardImg" src="assets/${productos.imagen}"  alt="${productos.producto} de ${productos.marca}">
    <div class="content">
        <p class="autorCard">${productos.marca}</p>
        <p class="precioCard">Precio: ${productos.precio}</p>
        <button id="agregarBtn${productos.id}" class="btn btn-outline-success">Agregar al carrito</button>
    </div>
</article>`
regalos.appendChild(nuevoProducto)
let btnAgregar = document.getElementById(`agregarBtn${productos.id}`)
console.log(btnAgregar)
btnAgregar.addEventListener("click", () =>{
    agregarAlCarrito(productos)
})
 }

 // Guardar en el storage los productos del carrito
 function agregarAlCarrito(productos){
console.log(productos)
productosEnCarrito.push(productos)
console.log(productos)
localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
 }
 // Funcion de mostrar cards en carrito
function cargarProductosCarrito(array){
    modalBody.innerHTML = ""
    
    array.forEach((productoCarrito)=>{
        modalBody.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
            <img class="card-img-top" height="300px" src="assets/${productoCarrito.imagen}" alt="${productoCarrito.producto}">
            <div class="card-body">
                    <h4 class="card-title">${productoCarrito.producto}</h4>
                
                    <p class="card-text">$${productoCarrito.precio}</p> 
                    <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            </div>    
        </div>
`
    })
    // eliminar del carrito
    array.forEach((productoCarrito, indice)=>{
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click",()=>{
           
           console.log(`Boton eliminar ${productoCarrito.producto}`)
           //Elimina la card del carrito
           let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
           cardProducto.remove()
           //Eliminar del array de comprar
           productosEnCarrito.splice(indice, 1) 
           console.log(productosEnCarrito)
           //Eliminar de Storage
           localStorage.setItem('carrito', JSON.stringify(productosEnCarrito))

        })
    })
}

 
 // Modo oscuro
 let btnDarkMode = document.getElementById("botonDarkMode")
let btnLightMode = document.getElementById('botonLightMode')
 let modoOscuro 
 //Condicional que evalua si existe o no ALGO EN EL STORAGE 
 if(localStorage.getItem("modoOscuro")){
     modoOscuro = localStorage.getItem("modoOscuro")
 }else{
     console.log("Entro por primera vez")
     localStorage.setItem("modoOscuro", false)
     modoOscuro = "false"
 }
 console.log(modoOscuro)

 

if(modoOscuro == "true"){
    document.body.style.backgroundColor = "grey"
    document.body.style.color = "antiquewhite"
    console.log("modo oscuro activado")
}else{
    document.body.style.backgroundColor = "antiquewhite"
    document.body.style.color = "black"
    console.log("modo claro activado")
}
 btnDarkMode.addEventListener("click", () =>{
    document.body.style.backgroundColor = "grey"
    document.body.style.color = "antiquewhite"
    document.body.classList.add("darkMode")
    localStorage.setItem("modoOscuro", true)
 })

 btnLightMode.addEventListener("click", () =>{
    document.body.style.backgroundColor = "antiquewhite"
    document.body.style.color = "black"
    localStorage.setItem("modoClaro", true)
 })
 localStorage.setItem("catalogo", JSON.stringify(catalogo))

 let productos2 = JSON.parse(localStorage.getItem("catalogo"))
 console.log(productos2)
 
