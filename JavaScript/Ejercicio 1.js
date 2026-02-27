// Solicitar datos al usuario y convertirlos al mismo tiempo
let producto = prompt("Ingresa el nombre del producto:");
let precio = parseFloat(prompt("Ingresa el precio del producto:"));
let cantidad = parseInt(prompt("Ingresa la cantidad que deseas comprar:"));

// Calcular total a pagar
let total = precio * cantidad;

// Mostrar resultado en consola
console.log("El total a pagar por " + cantidad + " " + producto + " es: " + total);
