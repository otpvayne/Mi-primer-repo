var nombre = "Juan";
let edad = 25;
const pais = "Colombia";

nombre = "Pedro";    // OK
edad = 30;           // OK
// pais = "México";  // ❌ Esto daría error

console.log(nombre); // Pedro
console.log(edad);   // 30
console.log(pais);   // Colombia

{
    let edad = 35; // Esta variable 'edad' es diferente a la anterior
    console.log(edad); // 35
}
console.log(edad); // 30, sigue siendo la edad global