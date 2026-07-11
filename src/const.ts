import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

// dayjs 설정: UTC 및 타임존 플러그인 확장, 한국어 로캘 설정
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

/**
 * 예식 일시 설정
 * Asia/Seoul 타임존 기준으로 설정합니다.
 */
export const WEDDING_DATE = dayjs.tz("2026-09-20 16:00", "Asia/Seoul")

/**
 * 예식 일시 포맷
 * 분이 0이면 분을 생략하고, 그 외에는 표시합니다.
 * 예: 2024년 8월 24일 토요일 오후 1시
 */
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

/**
 * 예식 당월 휴무일 (달력 표시용)
 * 예: 8월 15일 광복절
 */
export const HOLIDAYS = [24, 25, 26]

/**
 * 예식 장소 명칭
 */
export const LOCATION = "트라디노이"

/**
 * 예식 장소 상세 주소
 */
export const LOCATION_ADDRESS = "서울 강남구 도곡로99길 16 6층"

/**
 * 카카오톡 공유 시 사용할 위치 정보 주소
 * 필요에 따라 LOCATION과 다르게 설정할 수 있습니다.
 */
export const SHARE_ADDRESS = LOCATION

/**
 * 카카오톡 공유 시 표시될 위치 제목
 */
export const SHARE_ADDRESS_TITLE = LOCATION

/**
 * 지도 서비스(네이버, 카카오)에 사용할 좌표 [경도, 위도]
 */
export const WEDDING_HALL_POSITION = [127.066035, 37.501847]

/**
 * 네이버 지도 장소 ID (NMAP_PLACE_ID)
 * 네이버 지도에서 장소 검색 후 URL의 숫자 부분을 입력합니다.
 */
export const NMAP_PLACE_ID = 1297636555

/**
 * 카카오 지도 장소 ID (KMAP_PLACE_ID)
 * 카카오 지도에서 장소 상세보기 클릭 후 URL의 숫자 부분을 입력합니다.
 */
export const KMAP_PLACE_ID = 1290739532

// 신부 정보 설정
export const BRIDE_FULLNAME = "이소희"
export const BRIDE_FIRSTNAME = "소희"
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = "이일선"
export const BRIDE_MOTHER = "송필순"

/**
 * 신부측 연락처 및 계좌 정보
 */
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-8971-7689",
    account: "우리은행 1002458451388",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-9838-2136",
    account: "국민은행 795210242398",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-9830-2136",
    account: "하나은행 12391008810207",
  },
]

// 신랑 정보 설정
export const GROOM_FULLNAME = "최세민"
export const GROOM_FIRSTNAME = "세민"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "최수원"
export const GROOM_MOTHER = "홍승혜"

/**
 * 신랑측 연락처 및 계좌 정보
 */
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-4129-3151",
    account: "하나은행 10591018732507",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-9390-3151",
    account: "신한은행 000000000000",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-4182-3151",
    account: "국민은행 000000000000",
  },
]
