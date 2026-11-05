// Photos shown in the Photo Booth app. Drop images in /public/photos and list
// them here. Until there are enough, the remaining slots render placeholders.
export type Photo = { src: string; alt: string };

export const photos: Photo[] = [{ src: "/eduardo.jpg", alt: "Luis" }];

export const PHOTO_SLOTS = 6;
