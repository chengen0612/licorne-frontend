import React from 'react'

function Description() {
  return (
    <>
      <div className="course__description">
        <p>
          你是否對香氣的神秘充滿嚮往？
          <br />
          是否想了解香水是如何製造的，甚至是想要親手設計屬於自己的味道呢？
          <br />
          <br />
          Licorne 與法國國際高等香水學院 ISIPCA
          合作，聘請了調香師界權威專家－希當普利茲親自到場授課，分享他多年香水調製經驗及第一手關於香水產業的資訊。
          <br />
          <br />
          在精心規劃的課程內，除了包含一般香水的基本常識以外，還加入了初級專業調香師的訓練課程（如嗅覺訓練、常見百種香調辨識訓練等），有別於一般坊間的香水體驗營。
          <br />
          <br />
          這次的體驗課程是針對有強烈興趣並已有相關經驗的學員，但是我們也歡迎初學者。
        </p>
        <h5 className="mt-4 font-weight-bold">課程大綱</h5>

        <ul className="course__description-list ml-4 mb-3">
          <li>了解香水的分類知識</li>
          <li>了解香水並熟練製作</li>
          <li>了解創意調香師的角色</li>
          <li>了解香水平衡搭配的重要性</li>
          <li>100 支調香原料(精油, 原精, 單體香料)香氣&特性</li>
          <li>學習安全並自信地香水製造</li>
          <li>嗅覺訓練 & 共感覺訓練Synesthesia Training</li>
        </ul>

        <h5 className="mt-4 font-weight-bold">國際認證證書</h5>
        <p>
          完成本工作坊課程並測驗及格的學員，將獲得由法國國際高等香水學院頒發的初階調香師國際證書。此證書獲得國際各大調香師協會及香水生產商的承認，不但可以作為申請國外學程的備審資料，也可用作進入相關產業的敲門磚。
        </p>
        <h5 className="mt-4 font-weight-bold">師資介紹</h5>
        <p>
          意大利籍調香大師希當普利（Sit-Down Please）。曾為眾多時尚大廠如
          Dior、Channel 調配出舉世聞名的經典香氣，如 Dior 黃金之風系列的黃金體驗
          (Golden Experience) 或是 Channel 白金之星系列的世界 （The
          World）。被譽為是 21
          世紀最偉大的調香師。目前任教於法國國際高等香水學院
          ISIPCA，教學經驗豐富。
        </p>
      </div>
    </>
  )
}
function NotesRegistration() {
  return (
    <>
      <ul className="course__description-list">
        <li>
          本工作坊保留課程師資、內容、時段等課務相關彈性調整及變更的權利，如有任何異動，將進行公告與通知。
        </li>
        <li>
          報名後3日內完成繳費者，始完成報名手續，逾期未繳費者視同放棄，不另行通知。
        </li>
        <li>
          報名繳費後，恕不接受延至下期上課；謝絕旁聽或試聽，以免影響課程進行。
        </li>
        <li>繳費收據統一由開課當日領取。</li>
        <li>
          完成報名手續後，因故無法參加本活動者，需以書面email申請退費，退費需三十個工作天。
        </li>
        <li>
          繳費後於實際開課日前提出退費申請者（限開課前一日辦理），退學費九成；實際開課日期起，且未逾全期或總課程時數三分之一期間內提出退費申請者，退學費五成；達全期或總課程時數之三分之一以上期間提出退費申請者，則不予退費。
        </li>
        <li>開課前一周，將以e-mail寄發開課通知。</li>
        <li>
          活動期間提供葷、素兩種選擇之便當或餐食，如有特殊飲食需求，敬請自理。
        </li>
        <li>
          活動期間，因天災(如颱風)，政府發佈停止上班上課之公告，即行停課，不另行通知；為不影響課程的完整性，本中心將視授課老師可行的時間，調整上課時間或安排時間補課，若無法配合補課時間，恕不另行退費。
        </li>
        <li>
          本工作坊基於安排課程活動服務必要，向您蒐集本報名表內之辨識個人資料，作為工作坊課程活動確認、憑證、通知及活動訊息宣傳等相關必要服務之需，如您有依個人資料保護法服務必要，請致電本活動專線
          123456789。
        </li>
      </ul>
    </>
  )
}

function CourseDescription(props) {
  const { infoBtn } = props
  if (infoBtn) {
    return <Description />
  } else {
    return <NotesRegistration />
  }
}
export default CourseDescription
