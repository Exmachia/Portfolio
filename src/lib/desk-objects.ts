// Things that sit on the cutting mat. Images are cut-outs (transparent PNG-like
// WebP) trimmed to their silhouette; `widthCm` is the real-world width so the
// objects keep believable proportions relative to the mat.
export type DeskObject = {
  id: string;
  src: string;
  // pixel size of the file, used for the aspect ratio
  w: number;
  h: number;
  widthCm: number;
  alt: string;
};

export const MAT = {
  src: "/desk/mat.webp",
  w: 1556,
  h: 892,
  // real width of the mat, used as the scale reference (px per cm)
  widthCm: 32,
};

// The mat is tilted and reaches about two thirds of the desk on desktop; on
// phones it's wider than the screen and only a corner of the desk. These
// numbers mirror the `.desk-mat` rules in globals.css.
export const MAT_TILT_DEG = 5;
const MAT_RATIO = MAT.h / MAT.w;

export function deskGeometry(vw: number, vh: number) {
  const mobile = vw < 768;
  const matW = vw * (mobile ? 1.18 : 0.66);
  const matH = matW * MAT_RATIO;
  const cx = vw * 0.53;
  // part of the mat is cropped off the top edge (28% on desktop, 20% on phones)
  const crop = mobile ? 0.2 : 0.28;
  const cy = (mobile ? 48 : 36) - matH * crop + matH / 2;
  const objectScale = mobile ? 0.78 : 1;
  return {
    mobile,
    matW,
    matH,
    cx,
    cy,
    vh,
    pxPerCm: (matW / MAT.widthCm) * objectScale,
  };
}

// How many objects are on the desk at once; they are picked at random on
// every page load.
export const OBJECTS_ON_DESK = 5;

export const DESK_OBJECTS: DeskObject[] = [
  { id: "daft-punk", src: "/desk/daft-punk.webp", w: 900, h: 760, widthCm: 12.5, alt: "Daft Punk, Homework, on CD" },
  { id: "camera", src: "/desk/camera.webp", w: 900, h: 812, widthCm: 11.5, alt: "Sony Cyber-shot compact camera with a wrist strap" },
  { id: "pen", src: "/desk/pen.webp", w: 900, h: 578, widthCm: 12, alt: "Sakura Pigma Micron 005 fine-liner pen" },
  { id: "gameboy", src: "/desk/gameboy.webp", w: 547, h: 900, widthCm: 7.5, alt: "Purple Game Boy Color" },
  { id: "earbuds", src: "/desk/earbuds.webp", w: 900, h: 806, widthCm: 10, alt: "Wired earbuds, tangled" },
  { id: "lego", src: "/desk/lego.webp", w: 900, h: 388, widthCm: 4.4, alt: "Red LEGO brick" },
  { id: "pick", src: "/desk/pick.webp", w: 773, h: 900, widthCm: 3.8, alt: "Red Dunlop Tortex guitar pick" },
  { id: "polaroid-bernal", src: "/desk/polaroid-bernal.webp", w: 607, h: 900, widthCm: 6.2, alt: "Instant photo of three friends in front of Peña de Bernal" },
  { id: "charizard", src: "/desk/charizard.webp", w: 648, h: 900, widthCm: 6.8, alt: "Charizard Pokémon card" },
  { id: "polaroid-valle", src: "/desk/polaroid-valle.webp", w: 608, h: 900, widthCm: 6.2, alt: "Instant photo of a couple at a mountain viewpoint" },
  { id: "a24", src: "/desk/a24.webp", w: 900, h: 299, widthCm: 7.5, alt: "A24 metal keychain" },
];
