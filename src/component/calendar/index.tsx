import { useEffect, useMemo, useState } from "react"
import {
  BRIDE_FIRSTNAME,
  GROOM_FIRSTNAME,
  WEDDING_DATE,
} from "../../const"
import { REFERENCE_IMAGES } from "../../images"
import { LazyDiv } from "../lazyDiv"

/**
 * reference HTML과 동일한 캘린더 이미지 섹션입니다.
 *
 * @returns {JSX.Element} 캘린더 섹션
 */
export const Calendar = () => {
  const [tsDiff, setTsDiff] = useState(WEDDING_DATE.diff())

  const dayDiff = useMemo(() => {
    const dayOffset = WEDDING_DATE.diff(WEDDING_DATE.startOf("day"))
    return Math.ceil((tsDiff - dayOffset) / 1000 / 60 / 60 / 24)
  }, [tsDiff])

  useEffect(() => {
    const interval = setInterval(() => {
      setTsDiff(WEDDING_DATE.diff())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const diffs = useMemo(() => {
    const tsDiffAbs = Math.abs(tsDiff)
    const seconds = Math.floor((tsDiffAbs % 60000) / 1000)
    const minutes = Math.floor((tsDiffAbs % 3600000) / 60000)
    const hours = Math.floor((tsDiffAbs % 86400000) / 3600000)
    const days = Math.floor(tsDiffAbs / 86400000)

    return { days, hours, minutes, seconds }
  }, [tsDiff])

  return (
    <LazyDiv className="reference-section calendar">
      <img
        className="full-img"
        src={REFERENCE_IMAGES.calendar}
        alt="결혼식 달력"
      />
      <div className="countdown-wrapper">
        <div className="countdown">
          <div className="unit">DAY</div>
          <div />
          <div className="unit">HOUR</div>
          <div />
          <div className="unit">MIN</div>
          <div />
          <div className="unit">SEC</div>
          <div className="count">{diffs.days}</div>
          <span>:</span>
          <div className="count">{diffs.hours}</div>
          <span>:</span>
          <div className="count">{diffs.minutes}</div>
          <span>:</span>
          <div className="count">{diffs.seconds}</div>
        </div>
        <div className="message">
          {GROOM_FIRSTNAME} & {BRIDE_FIRSTNAME}의 결혼식이{" "}
          {dayDiff > 0 ? (
            <>
              <span className="d-day">{dayDiff}</span>일 남았습니다.
            </>
          ) : dayDiff === 0 ? (
            <>오늘입니다.</>
          ) : (
            <>
              <span className="d-day">{-dayDiff}</span>일 지났습니다.
            </>
          )}
        </div>
      </div>
    </LazyDiv>
  )
}
