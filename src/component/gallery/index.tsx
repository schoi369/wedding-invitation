import { useEffect, useState } from "react"
import { REFERENCE_GALLERY_IMAGES } from "../../images"
import { LazyDiv } from "../lazyDiv"

/**
 * reference HTML과 동일한 3열 갤러리와 라이트박스입니다.
 *
 * @returns {JSX.Element} 갤러리 섹션
 */
export const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeLightbox = () => setSelectedIndex(null)
  const shiftLightbox = (direction: number) => {
    setSelectedIndex((current) => {
      if (current === null) return current
      return (
        (current + direction + REFERENCE_GALLERY_IMAGES.length) %
        REFERENCE_GALLERY_IMAGES.length
      )
    })
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowLeft") shiftLightbox(-1)
      if (event.key === "ArrowRight") shiftLightbox(1)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeydown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [selectedIndex])

  return (
    <>
      <LazyDiv className="reference-section gallery">
        <div className="gallery-grid">
          {REFERENCE_GALLERY_IMAGES.map((image, index) => (
            <button
              className="gallery-item"
              key={image}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={image} alt={`갤러리 이미지 ${index + 1}`} />
            </button>
          ))}
        </div>
      </LazyDiv>

      {selectedIndex !== null && (
        <div className="lb-overlay on" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}>
            x
          </button>
          <button
            className="lb-prev"
            onClick={(event) => {
              event.stopPropagation()
              shiftLightbox(-1)
            }}
          >
            ‹
          </button>
          <img
            id="lb-img"
            src={REFERENCE_GALLERY_IMAGES[selectedIndex]}
            alt="확대 이미지"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="lb-next"
            onClick={(event) => {
              event.stopPropagation()
              shiftLightbox(1)
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
