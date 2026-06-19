import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"
import { REFERENCE_IMAGES } from "../../images"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(LOCATION_ADDRESS)
      alert("주소가 복사되었습니다.")
    } catch {
      alert("복사에 실패했습니다.")
    }
  }

  return (
    <LazyDiv className="reference-section location">
      <div className="section-space" />
      <img
        className="map-title"
        src={REFERENCE_IMAGES.mapTitle}
        alt="오시는 길"
      />
      <div className="title-gap" />

      {/* 지도 및 길찾기 버튼은 기존 React 컴포넌트를 유지합니다. */}
      <Map />

      <div className="map-gap" />

      <div className="addr-row">
        <span>
          <p>
            <strong>{LOCATION}</strong>
          </p>
          <p>{LOCATION_ADDRESS}</p>
        </span>
        <button id="map_btn" onClick={copyAddress}>
          복사하기
        </button>
      </div>

      <hr className="divider" />

      {/* 대중교통 및 자가용 안내 섹션 */}
      <div className="transport">
        <div className="transport-block">
          <div className="transport-heading">
            <BusIcon className="transportation-icon" />
            <strong>대중교통</strong>
          </div>
          <p>
            지하철 2호선 낙성대역 4번출구
            <br />
            마을버스 관악 02번 승차
            <br />
            서울대후문·연구공원 정류장 하차
          </p>
        </div>

        <div className="transport-block">
          <div className="transport-heading">
            <CarIcon className="transportation-icon" />
            <strong>자가용</strong>
          </div>
          <p>
            네이버 지도, 카카오 내비, 티맵 등에서
            <br />
            {LOCATION} 검색
            <br />
            주차장 이용 시 웨딩홀과 바로 연결됩니다.
          </p>
        </div>
      </div>

      <div className="section-bottom-space" />
    </LazyDiv>
  )
}
