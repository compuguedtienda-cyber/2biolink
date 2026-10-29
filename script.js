/*
  PERSONALIZA TUS ENLACES AQUÍ:
  1. Cambia el número de WhatsApp en index.html: https://wa.me/51999999999
  2. Reemplaza las URL de redes sociales en SOCIAL_LINKS.
  3. Cambia los enlaces de cada categoría en CATEGORY_LINKS.
*/
const CATEGORY_LINKS = {
  laptops: "https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar%20una%20laptop",
  computadoras: "https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar%20una%20computadora",
  impresoras: "https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar%20una%20impresora",
  accesorios: "https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar%20accesorios",
  servicio: "https://wa.me/51999999999?text=Hola%2C%20necesito%20servicio%20t%C3%A9cnico",
  software: "https://wa.me/51999999999?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20software"
};

const SOCIAL_LINKS = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
  youtube: "https://youtube.com/"
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  link.href = CATEGORY_LINKS[key] || "#";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll("[data-social]").forEach((link) => {
  const key = link.dataset.social;
  link.href = SOCIAL_LINKS[key] || "#";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
