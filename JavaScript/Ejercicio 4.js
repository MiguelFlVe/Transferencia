// ============================================
// EJERCICIO 4 - Consumo de Gasolina
// ============================================

// --- DECLARACION DE VARIABLES ---
let kilometros;
let consumoPorKm;
let litrosTotales;

// --- DATOS DE ENTRADA (ingresados por el usuario) ---
kilometros = parseFloat(prompt("Ingresa la cantidad de kilómetros recorridos:"));
consumoPorKm = parseFloat(prompt("Ingresa el consumo por kilómetro (litros/km):"));

// --- OPERACION ---
litrosTotales = kilometros * consumoPorKm;

// --- DATOS DE SALIDA ---
console.log("=== Consumo de Gasolina ===");
console.log("Kilómetros recorridos: " + kilometros + " km");
console.log("Consumo por km       : " + consumoPorKm + " litros/km");
console.log("Litros totales       : " + litrosTotales.toFixed(2) + " litros");
alert("Total consumido: " + litrosTotales.toFixed(2) + " litros");
