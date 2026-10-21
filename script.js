// COMPUGUED Bio Link — JavaScript opcional
// Actualiza automáticamente el año del pie de página.
const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
