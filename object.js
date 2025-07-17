// const persona = {
//     nombre: 'Diego',
//     edad: 25,
//     ciudad: 'Madrid',
// };

console.log(persona.nombre); // Diego
console.log(persona["edad"]); // 25


export const libro ={
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    paginas: 96
};

console.log(libro.titulo); // El Principito
console.log(libro['autor']); // Antoine de Saint-Exupéry
console.log(libro.paginas); // 96


const user ={
    username: 'diego123',
    email: "boom@xd.com",
    stats: {
        followers: 150,
        following: 100,
        posts: 50
    }
};
const {username,email,stats:{followers}} = user;

console.log(username); // diego123
console.log(email); //
console.log(followers); // 150

const original = { a: 1, b: 2 };
const copia = { ...original, b: 3 }; // { a: 1, b: 3 

const persona = { nombre: "Lina", edad: 28, ciudad: "Medellín" };
const copiaa ={...persona,ciudad:"cali"};

function sumar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10
console.log(sumar(5, 10, 15)); // 30    

async function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function proceso() {
    console.log("Inicio del proceso");
    await esperar(2000); // Espera 2 segundos
    console.log("Proceso intermedio");
    await esperar(1000); // Espera 1 segundo
    console.log("Proceso completado");
    
}