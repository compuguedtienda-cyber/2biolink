// COMPUGUED Bio Link — JavaScript opcional para pequeños detalles.
document.addEventListener("DOMContentLoaded", () => {
  // Los enlaces sociales con href="#" son marcadores de posición.
  // Evita que salten al inicio hasta que se configuren URLs reales.
  document.querySelectorAll('.social[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Reemplaza este enlace con la URL real de tu perfil social.");
    });
  });
});
