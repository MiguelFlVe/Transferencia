// ============================================
// EJERCICIO 6 - Conversión de Minutos a Horas y Minutos
// ============================================

// --- DECLARACION DE VARIABLES ---
let totalMinutos;
let horas;
let minutosRestantes;

// --- DATOS DE ENTRADA (ingresados por el usuario) ---
totalMinutos = parseInt(prompt("Ingresa el número de minutos:"));

// --- OPERACION ---
horas = Math.floor(totalMinutos / 60);  // Parte entera de la división
minutosRestantes = totalMinutos % 60;              // Residuo de la división

// --- DATOS DE SALIDA ---
console.log("=== Conversión de Minutos ===");
console.log("Total minutos    : " + totalMinutos + " minutos");
console.log("Resultado        : " + horas + " horas y " + minutosRestantes + " minutos");
alert(totalMinutos + " minutos = " + horas + " horas y " + minutosRestantes + " minutos");


