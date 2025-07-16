import { saludar } from './saludos.js';
import { calcularEdad } from './edad.js';
import { despedir } from './depedida.js';  
const nombre = "Diego";
const nacimiento = 2005;

console.log(saludar(nombre));
console.log(`Tienes ${calcularEdad(nacimiento)} años.`);
console.log(despedir(nombre));