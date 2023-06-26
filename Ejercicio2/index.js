console.log("Elija una opcion")
console.log("1. Crear un nombre")
console.log("2. Eliminar un nombre")
console.log("3. Actualizar un nombre")
var op;
opcion = prompt("Opcion", '')
console.log("Opcion", opcion + "<br>")
opcion=parseInt(op)
switch (op) {
    case 1:
        console.log("Crear un nombre" + crear())
        break;
        
    case 2:
        console.log("Eliminar un nombre" + eliminar())
        break;
        
    case 3:
        console.log("Actualizar un nombre" + actualizar())
        break;

    default:
        break;
}

let nombres = []
function crear() {
    let dato = prompt("Ingrese nombre: ")
    nombres.push(dato)
}
crear()
function mostrar() {
    nombres.forEach(nombre => {
        console.log(nombre)
    });
}
function eliminar() {
    nombres.pop()
}
function actualizar() {
    nombres[1] = prompt("Actualizar el nombre")
}
crear();
crear();
mostrar();
eliminar();
actualizar();
mostrar();

