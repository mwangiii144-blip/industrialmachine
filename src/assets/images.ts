import { asset } from "@/lib/asset";

/**
 * Machine photography lives in `public/images/` so it is served as a plain
 * static file. Each entry keeps the `{ url }` shape used across the app.
 */
const image = (file: string) => ({ url: asset(`images/${file}`) });

export const butterflyImg = image("image.png");
export const jukiImg = image("image-2.png");
export const sirubaImg = image("image-3.png");
export const jackImg = image("image-4.png");
export const domesticImg = image("image-5.png");
export const jackShowroomImg = image("image-6.png");
export const jukiRowImg = image("image-7.png");
export const mssImg = image("image-8.png");
export const kansaiImg = image("image-9.png");
export const kansaiHeadImg = image("image-10.png");
export const logoAsset = image("logo.png");
