import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { REFERENCE_IMAGES } from "../../images"
import { LazyDiv } from "../lazyDiv"

const copyAccount = async (account: string) => {
  try {
    await navigator.clipboard.writeText(account)
    alert("복사되었습니다.")
  } catch {
    alert("복사에 실패했습니다.")
  }
}

/**
 * 계좌번호 한 줄을 표시합니다.
 *
 * @returns {JSX.Element} 계좌번호 항목
 */
const AccountItem = ({
  relation,
  name,
  account,
}: {
  relation: string
  name: string
  account?: string
}) => {
  if (!account) return null

  return (
    <li>
      <span>
        <p>{account}</p>
        <p>
          {relation} {name}
        </p>
      </span>
      <button onClick={() => copyAccount(account)}>복사하기</button>
    </li>
  )
}

/**
 * reference HTML과 동일한 마음 전하실 곳 섹션입니다.
 *
 * @returns {JSX.Element} 축의금 계좌번호 섹션
 */
export const Information = () => {
  return (
    <LazyDiv className="reference-section information">
      <img
        className="acct-title"
        src={REFERENCE_IMAGES.accountTitle}
        alt="마음 전하실 곳"
      />
      <div className="title-gap" />

      <ul>
        <h6>신랑 측 계좌번호</h6>
        {GROOM_INFO.map((info) => (
          <AccountItem key={info.relation} {...info} />
        ))}
      </ul>

      <ul>
        <h6>신부 측 계좌번호</h6>
        {BRIDE_INFO.map((info) => (
          <AccountItem key={info.relation} {...info} />
        ))}
      </ul>

      <div className="section-bottom-space" />
    </LazyDiv>
  )
}
