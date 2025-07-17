// leer.js
async function leerJSON() {
  try {
    const res = await fetch("./datos.json");
    const datos = await res.json();
    console.log(`Bienvenido ${datos.usuario}, tu nivel es ${datos.nivel}`);
  } catch (err) {
    console.error("No se pudo leer el archivo", err);
  }
}

leerJSON();
