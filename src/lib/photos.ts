// Photos shown in the Photo Booth app. Drop images in /public/photos and list
// them here. Until there are enough, the remaining slots render placeholders.
export type Photo = { src: string; alt: string };

export const photos: Photo[] = [
  { src: "/photos/selfie-chamarra.webp", alt: "Selfie en el espejo con gorro tejido y chamarra de colores" },
  { src: "/photos/volcan.webp", alt: "Un volcán visto desde la carretera, en blanco y negro" },
  { src: "/photos/selfie-espejo-calle.webp", alt: "Selfie en un espejo redondo en una calle con arcos" },
  { src: "/photos/matcha.webp", alt: "Un matcha latte visto desde arriba sobre una mesa de madera" },
  { src: "/photos/ramen.webp", alt: "Dos platos de ramen con chashu, huevo y cebollín" },
  { src: "/photos/calle-paraguas.webp", alt: "Una calle cubierta de paraguas amarillos, azules y rojos" },
  { src: "/photos/selfie-espejo-metal.webp", alt: "Selfie en un probador de paredes metálicas con gorra azul" },
  { src: "/photos/cerveza.webp", alt: "Una lata de cerveza Pilsen en la mano" },
  { src: "/photos/mirador.webp", alt: "Dos amigos sentados en un tronco frente a las montañas" },
];

export const PHOTO_SLOTS = 6;
