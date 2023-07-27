let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

// seleccionar.addEventListener("onchange", establecerEstados);
if (document.querySelector('muroPerimetral')) {
  document.getElementById("muroPerimetral").addEventListener("change", mostrarOpcionesAdicionales);
}
// function establecerEstados() {
//   let eleccion = seleccionar.value;

//   if (eleccion === 'estado') {
//     parrafo.textContent = 'Destacar que el árbol se encuentra dentro de una zona ajardinada y que la zona de quiebre se encuentra en buenas condiciones siendo evidente que el daño ha sido causa del importante vendaval. Se tendrá en cuenta en el análisis la tala, desescombro y reposición si corresponde.';
//   } else if (eleccion === 'estado2') {
//     parrafo.textContent = 'Destacar que el árbol afectado presenta un mal estado en la zona de quiebre y por lo tanto, de haber estado en buen estado, puede no haberse visto afectado por el viento. A tal efecto, no se considerará el daño del árbol en sí como tampoco su tala y desescombro. ';
//   } else if (eleccion === 'estado3') {
//     parrafo.textContent = 'Destacar que el árbol afectado no se encuentra dentro de una zona ajardinada. A tal efecto, no se considerará el daño del árbol en sí como tampoco su tala y desescombro.';
//   } else {
//     parrafo.textContent = '';
//   }
// }
  
function mostrarOpcionesAdicionales() {
  var muroPerimetral = document.getElementById("muroPerimetral");
  var opcionesAdicionales = document.getElementById("opcionesAdicionales");
  if (muroPerimetral.checked) {
    opcionesAdicionales.style.display = "block";
  } else {
    opcionesAdicionales.style.display = "none";
  }
}