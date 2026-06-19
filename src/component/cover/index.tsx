import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE_FORMAT,
  LOCATION_ADDRESS,
  WEDDING_DATE,
} from "../../const"
import { REFERENCE_IMAGES } from "../../images"
import { LazyDiv } from "../lazyDiv"

/**
 * 초대장의 메인 커버 섹션입니다.
 * 예식 일시, 신랑/신부 이름, 장소를 표시합니다.
 *
 * @returns {JSX.Element} 커버 섹션
 */
export const Cover = () => {
  return (
    <LazyDiv className="reference-section cover">
      {/* reference HTML의 메인 이미지 섹션입니다. */}
      <div className="cover-wrap">
        <img className="full-img" src={REFERENCE_IMAGES.main1} alt="커버" />
      </div>

      <img
        className="full-img save-the-date"
        src={REFERENCE_IMAGES.saveTheDate}
        alt="Save the date"
      />

      <div className="date-info">
        <p>{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</p>
        <p>{LOCATION}</p>
        <p>{LOCATION_ADDRESS}</p>
      </div>

      <img
        className="full-img envelope"
        src={REFERENCE_IMAGES.envelope}
        alt="웨딩"
      />
      <img
        className="handwrite"
        src={REFERENCE_IMAGES.handwrite}
        alt="초대 문구"
      />

      <div className="names">
        <p>
          <strong>Groom</strong>
        </p>
        <p>{GROOM_FULLNAME}</p>
        <br />
        <p>
          <strong>Bride</strong>
        </p>
        <p>{BRIDE_FULLNAME}</p>
      </div>

      <div className="cover-bottom-space" />
      <img
        className="full-img main2"
        src={REFERENCE_IMAGES.main2}
        alt="웨딩"
      />
    </LazyDiv>
  )
}

/**
 * reference HTML의 부모님 말씀 이미지 섹션입니다.
 *
 * @returns {JSX.Element} 부모님 말씀 섹션
 */
export const ParentMessages = () => {
  return (
    <LazyDiv className="reference-section parents">
      <img
        className="full-img"
        src={REFERENCE_IMAGES.groomFamily}
        alt="신랑 부모님 말씀"
      />
      <img
        className="full-img"
        src={REFERENCE_IMAGES.brideFamily}
        alt="신부 부모님 말씀"
      />
    </LazyDiv>
  )
}

/**
 * reference HTML의 러브레터 이미지 섹션입니다.
 *
 * @returns {JSX.Element} 러브레터 섹션
 */
export const LoveLetter = () => {
  return (
    <LazyDiv className="reference-section loveletter">
      <img
        className="full-img"
        src={REFERENCE_IMAGES.loveletter1}
        alt="러브레터"
      />
      <img
        className="full-img"
        src={REFERENCE_IMAGES.loveletter2}
        alt="러브레터"
      />
    </LazyDiv>
  )
}

/**
 * reference HTML의 영상 썸네일 섹션입니다.
 *
 * @returns {JSX.Element} 영상 섹션
 */
export const WeddingVideo = () => {
  return (
    <LazyDiv className="reference-section wedding-video">
      <a
        className="video-thumb"
        href="https://www.youtube.com/watch?v=8_SPFgmSVUo"
        target="_blank"
        rel="noreferrer"
      >
        <img src={REFERENCE_IMAGES.videoThumb} alt="영상 썸네일" />
        <span className="video-play-btn">▶</span>
      </a>
    </LazyDiv>
  )
}
