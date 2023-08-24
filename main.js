// Inicio //
function minimoEdad () {
    alert('Esta pagina es para mayores de edad');

    let edad = parseInt(prompt("Ingrese su edad"));
    
    if (edad >= 18) {
    alert('Puede Acceder')
    } else {
        alert('Usted no puede Acceder')
        minimoEdad();
    } 
}
minimoEdad ();

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

function productosDisponibles() {
    let conocerListaProductos = prompt("Quiere Saber que productos estan disponibles?")
    if (conocerListaProductos == "si") {
        productos.forEach((item) => {
            alert(item.nombre);
        })
    } else if (conocerListaProductos == "no") {
        alert("okey"); 
    } else {
        alert("Porfavor responda con un 'si' o un 'no'");
        productosDisponibles();
    }
}

productosDisponibles();

function productoEspecificoPrecio() {

    let conocerProductoEspecifico = prompt("Quiere saber el precio de un producto especifico")

    if (conocerProductoEspecifico == "si") {

        let nombreProductoEspecifico = prompt("Ingrese el nombre del producto")

        const productoEspecifico = productos.find((item) => item.nombre === nombreProductoEspecifico);
        
        alert (productoEspecifico.precio + "$")

    } else if (conocerProductoEspecifico == "no") {

        alert("okey"); 

    } else {

        alert("Porfavor responda con un 'si' o un 'no'");
        productoEspecificoPrecio();

    }

}

// Cambiar esto por un while asi se puede repetir el proceso para mas productos // 

productoEspecificoPrecio();

// Funcion para agregar al carrito // 

function agregarCarrito () {
    let seguir = prompt("Desea agregar algun producto al carrito?")

    if (seguir == "si") {

        function agregarProducto () {
           // do {
                let producto = prompt("Ingrese el nombre del producto")

                let productoAgregado = productos.find(function(objeto){
                    return objeto.nombre === producto;
                })
                
                 carrito.push(productoAgregado)   


                 console.log(carrito) 


           // let repetir = prompt("Quiere agregar otro producto?")

          //  } while (repetir == "si")    
        }
    
        agregarProducto();


    } else if (seguir == "no") {

        alert("gracias por visitas :)"); 

    } else {

        alert("Porfavor responda con un 'si' o un 'no'");
        agregarCarrito();

    }
}
    
agregarCarrito(); 


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

let tieneDescuento = prompt('Tiene Descuento?');

if (tieneDescuento == 'si'){

descuento = prompt('De cuanto?')

} else {
    alert('Okey!')
}


// Resultado // 

let precioFinal = multiplicacion(suma(resta(precioCarrito,descuento),iva(precioCarrito)));

alert(`El monto a pagar es ${precioFinal}`)


    

