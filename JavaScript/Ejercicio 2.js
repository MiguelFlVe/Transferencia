// Solicitar datos al usuario
let horasTrabajadas = parseFloat(prompt("Ingresa el número de horas trabajadas:"));
let valorHora = parseFloat(prompt("Ingresa el valor por hora:"));

// Calcular salario semanal
let salarioSemanal = horasTrabajadas * valorHora;

// Mostrar resultado en consola
console.log("El salario semanal es: " + salarioSemanal);
