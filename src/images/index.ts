import coverImage from "./cover.jpg"

const galleryImageModules = import.meta.glob("./image*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>

/**
 * 메인 커버 이미지
 */
export const COVER_IMAGE = coverImage

/**
 * 갤러리에 표시될 이미지 목록
 */
export const GALLERY_IMAGES = Array.from(
  { length: 30 },
  (_, idx) => galleryImageModules[`./image${idx + 1}.jpg`],
).filter((image): image is string => !!image)
