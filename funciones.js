const saludar =(nombre)=> 'Hola, '+ nombre + ' Como estas?';
console.log(saludar('Diego')); // Hola, Diego Como estas?   

const calcularEdad = (añoNacimiento) => {
    const añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
}
console.log(calcularEdad(1998)); // 25 (o el año actual menos 1998)