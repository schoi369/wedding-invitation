import coverImage from "./cover.jpg"

const galleryImageModules = import.meta.glob("./image*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>

/**
 * 파일명에서 이미지 번호를 추출합니다.
 */
const getGalleryImageNumber = (path: string) => {
  const match = path.match(/image(\d+)\.jpg$/)
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER
}

/**
 * 메인 커버 이미지
 */
export const COVER_IMAGE = coverImage

/**
 * 갤러리에 표시될 이미지 목록
 */
export const GALLERY_IMAGES = Object.entries(galleryImageModules)
  .sort(([a], [b]) => getGalleryImageNumber(a) - getGalleryImageNumber(b))
  .map(([, image]) => image)
