// Inicio

// Definir variables
let price, discount, finalprice;

// Solicitar precio
price = parseFloat(prompt("Ingrese el valor del producto"));

// Definir el descuento
discount = price * 0.1;

// Calcular el precio final
finalprice = price - discount;
console.log("El precio final es", finalprice);

// Fin