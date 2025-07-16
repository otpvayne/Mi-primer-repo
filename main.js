import { saludar } from './saludos.js';
import { calcularEdad } from './edad.js';

const nombre = "Diego";
const nacimiento = 2005;

console.log(saludar(nombre));
console.log(`Tienes ${calcularEdad(nacimiento)} años.`);