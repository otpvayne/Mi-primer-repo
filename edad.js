export const calcularEdad = (añoNacimiento) => {
    const añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
}