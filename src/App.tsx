import {
  Cover,
  LoveLetter,
  ParentMessages,
  WeddingVideo,
} from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { ShareButton } from "./component/shareButton"

/**
 * 메인 애플리케이션 컴포넌트입니다.
 * 초대장의 각 섹션을 조합하여 화면을 구성합니다.
 *
 * @returns {JSX.Element} 애플리케이션 화면
 */
function App() {
  return (
    <div className="reference-page">
      <Cover />
      <ParentMessages />
      <WeddingVideo />
      <LoveLetter />
      <Gallery />
      <Calendar />
      <Location />
      <Information />
      <ShareButton />
    </div>
  )
}

export default App
