import React from 'react'
import './style.scss'

function Quiz() {
  return (
    <>
      <section>
        <div className="info">
          <div className="quizStart">
            <h3>氣味尋覓</h3>
            <div className="text_quiz">
              <p>
                張愛玲曾經說過「到人心裡的路是通過嗅覺，
                因為人類的靈魂是他們的氣味。」 你想知道你的靈魂的樣子嗎？
                接下來的心理測驗會是單選題，
                請閱讀完情境後，選擇一個最適合你的答案。
                請依照直覺作答，不要思考太久。
              </p>
            </div>

            <img src="./images/quiz-start.jpg" alt="" />
            <button className="quizStart_btn">開始測驗</button>
          </div>
          <div className="title">
            <h1>尋找你的專屬香氣</h1>
          </div>
          <div className="textBox">
            <p>
              外在形象是每個人一輩子都必須面對的課題，
              人類對不同氣味會作出直接的反應， 很多人會在不知不覺中
              利用嗅覺認知建立對人或事直觀且深刻的印象，
              你是否了解你給人最主觀的印象呢?
              藉由這個簡單的測驗，來尋找專屬於你的香味吧!
            </p>
          </div>
          <div className="btn">
            <button className="start">開始</button>
          </div>
        </div>
      </section>
      <section className="imgSection">
        <div className="imgBox">
          <img className="img" src="./images/home-quiz.jpg" alt="" />
        </div>
      </section>
      <article>
        <div className="info_down">
          <p>前往其他頁面文字引導</p>
        </div>
        <div className="link">
          <div className="box">
            <img className="custom" src="/images/home-custom.jpg" alt="" />
          </div>
          <div className="line_box"></div>
          <div className="box">
            <img className="course" src="/images/home-course.jpg" alt="" />
          </div>
          <div className="line_box"></div>
          <div className="box">
            <img
              className="bestseller"
              src="/images/home-bestseller.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="text">
          <h3>香水客製化</h3>
          <h3>工作坊課程</h3>
          <h3>熱銷排行榜</h3>
        </div>
      </article>
    </>
  )
}

export default Quiz
