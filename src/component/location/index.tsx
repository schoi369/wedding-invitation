import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <b>🚇 지하철 이용시 (도보 약 8분)</b>
            <br />
            2호선 <b>삼성역 3번 출구</b>로 나와서 직진
            <br />
            → <b>볼보 서비스센터</b>를 끼고 우회전
            <br />
            → <b>광양불고기 건물 6층</b>
          </div>
          <div />
          <div className="content">
            <b>🚌 버스 이용 시</b>
            <br />
            <b>대치2동주민센터·래미안하이스턴 정류장</b> 하차
            <br />
            강남01 · 강남06 · 4319 이용
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 내비, 티맵 등 이용
            <br />
            내비게이션에서 <b>트라디노이</b> 또는
            <br />
            <b>서울 강남구 도곡로99길 16</b>을 검색
            <br />
            (구주소: 서울 강남구 대치동 984)
          </div>
          <div />
          <div className="content">
            <b>🚗 주차 안내</b>
            <br />
            건물 1층에서 발렛주차를 이용하실 수 있습니다.
            <br />
            발렛주차가 만차인 경우,
            <br />
            인근 제휴 주차장을 안내해드립니다.
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
