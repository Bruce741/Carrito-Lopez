// Inicio //
let divInicio = document.getElementById("DivInicio")

let body = document.getElementById("body")

divInicio.innerHTML = "<h1>Este sitio es para mayores de edad, ingrese su edad para acceder </h1>"

function minimoEdad () {
    
    let edad = parseInt(prompt("Ingrese su edad"));
    
    if (edad >= 18) {
        divInicio.innerHTML = "<h1>Bienvenido al Carrito :)</h1>"
    } else if (edad < 18) {
        body.className = "FondoRojo" 
        divInicio.innerHTML = "<h1>Vuelva cuando sea mayor de edad</h1>"
    } 
}
minimoEdad ();

// Saludo // 


// Productos // 

class Producto {
    constructor (info) {
        this.nombre = info.nombre; 
        this.precio = info.precio;
    }
}

const producto1 = new Producto({
    nombre: "computadora",
    precio: 100,
})

const producto2 = new Producto({
    nombre: "television",
    precio: 50,
})

const producto3 = new Producto({
    nombre: "celular",
    precio: 40,
})

const producto4 = new Producto({
    nombre: "consola",
    precio: 100,
})

// Array de Productos // 

const productos = []; 

productos.push(producto1,producto2,producto3,producto4)


// Carrito // 

const carrito = []


// Funcion para agregar al carrito // 

let saludar = () => alert("gracias por visitas :)"); 

function agregarProducto () {
    
         let producto = prompt("Ingrese el nombre del producto")

         let productoAgregado = productos.find(function(objeto){
             return objeto.nombre === producto;
         })
         
          carrito.push(productoAgregado)   


          console.log(carrito) 

}
 
    
agregarCarrito(); 

// Guardar el carrito al localStorage // 


// Precio del carrito // 

let precioProducto1 = 0

carrito.forEach(function(precioProducto){
     precioProducto1 = precioProducto.precio;
})

let precioCarrito = parseInt(precioProducto1);


// Operaciones //

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
const multiplicacion = (a,b) => a*b; 


// Variables de Precio // 

let descuento = 0;
    

// Tiene Descuento? //


// Resultado // 

let precioFinal = multiplicacion(suma(resta(precioCarrito,descuento),iva(precioCarrito)));

alert(`El monto a pagar es ${precioFinal}`)


    

