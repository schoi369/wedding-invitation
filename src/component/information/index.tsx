import { useState } from "react"
import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { Modal } from "../modal"
import { AttendanceInfo } from "./attendance"

/**
 * 식사 정보 안내 컴포넌트입니다.
 */
export const Information1 = () => {
  return (
    <>
      <h2 className="english">Information</h2>
      <div className="info-card">
        <div className="label">안내 사항</div>
        <div className="content">
          <b>🌿 화환 안내</b>
          <br />
          축하 화환은 환경 보호를 위해 정중히 사양하며,
          <br />
          축하해 주시는 마음만 감사히 받겠습니다.
          <br />
          <br />
          <b>🥂 예식 안내</b>
          <br />
          예식은 1부와 2부로 진행됩니다.
          <br />
          1부 예식 후 식사를 먼저 즐기시고,
          <br />
          이어지는 2부 행사도 함께해 주세요.
        </div>
      </div>
    </>
  )
}

/**
 * 축의금 계좌번호 안내 컴포넌트입니다.
 * 신랑측, 신부측 계좌번호를 모달로 보여줍니다.
 */
export const Information2 = () => {
  const donationModalState = useState(false)
  const [isGroom, setIsGroom] = useState(true)

  return (
    <>
      <div className="info-card">
        <div className="label">마음 전하기</div>
        <div className="content">
          참석이 어려워 직접 축하해주지 못하는
          <br />
          분들을 위해 계좌번호를 기재하였습니다.
          <br />
          넓은 마음으로 양해 부탁드립니다.
        </div>

        <div className="break" />

        <Button
          style={{ width: "100%" }}
          onClick={() => {
            donationModalState[1](true)
            setIsGroom(true)
          }}
        >
          신랑측 계좌번호 보기
        </Button>
        <div className="break" />
        <Button
          style={{ width: "100%" }}
          onClick={() => {
            donationModalState[1](true)
            setIsGroom(false)
          }}
        >
          신부측 계좌번호 보기
        </Button>
      </div>

      {/* 계좌 정보 모달 */}
      <Modal
        modalState={donationModalState}
        className="donation-modal"
        closeOnClickBackground={true}
      >
        <div className="header">
          <div className="title">
            {isGroom ? "신랑측 계좌번호" : "신부측 계좌번호"}
          </div>
        </div>
        <div className="content">
          {(isGroom ? GROOM_INFO : BRIDE_INFO)
            .filter(({ account }) => !!account)
            .map(({ relation, name, account }) => (
              <div className="account-info" key={relation}>
                <div>
                  <div className="name">
                    <span className="relation">{relation}</span> {name}
                  </div>
                  <div>{account}</div>
                </div>
                <Button
                  className="copy-button"
                  onClick={async () => {
                    if (account) {
                      try {
                        // 계좌번호 복사 기능
                        await navigator.clipboard.writeText(account)
                        alert(account + "\n복사되었습니다.")
                      } catch {
                        alert("복사에 실패했습니다.")
                      }
                    }
                  }}
                >
                  복사하기
                </Button>
              </div>
            ))}
        </div>
        <div className="footer">
          <Button
            buttonStyle="style2"
            className="bg-light-grey-color text-dark-color"
            onClick={() => donationModalState[1](false)}
          >
            닫기
          </Button>
        </div>
      </Modal>
    </>
  )
}

/**
 * 정보 안내(식사, 축의금, 참석의사)를 통합하여 표시하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 정보 안내 섹션
 */
export const Information = () => {
  // 정적 모드일 경우 참석 의사 전달 기능을 제외합니다.
  if (STATIC_ONLY) {
    return (
      <>
        <LazyDiv className="card information">
          <Information1 />
        </LazyDiv>
        <LazyDiv className="card information">
          <Information2 />
        </LazyDiv>
      </>
    )
  }

  return (
    <LazyDiv className="card information">
      <Information1 />
      <Information2 />
      <AttendanceInfo />
    </LazyDiv>
  )
}
