// ============================================
// EJERCICIO 5 - Tiempo de Viaje
// ============================================

// --- DECLARACION DE VARIABLES ---
let distancia;
let velocidad;
let tiempoHoras;

// --- DATOS DE ENTRADA (ingresados por el usuario) ---
distancia = parseFloat(prompt("Ingresa la distancia del recorrido (km):"));
velocidad = parseFloat(prompt("Ingresa la velocidad promedio (km/h):"));

// --- OPERACION ---
// Fórmula: Tiempo = Distancia / Velocidad
tiempoHoras = distancia / velocidad;

// --- DATOS DE SALIDA ---
console.log("=== Tiempo de Viaje ===");
console.log("Distancia : " + distancia + " km");
console.log("Velocidad : " + velocidad + " km/h");
console.log("Tiempo    : " + tiempoHoras.toFixed(2) + " horas");
alert("Tiempo estimado del viaje: " + tiempoHoras.toFixed(2) + " horas");

