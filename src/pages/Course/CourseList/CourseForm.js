import React, { useState, useRef } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { FiHeart, FiRotateCcw } from 'react-icons/fi'
import CourseMapModal from './CourseMapModal'
import Backdrop from './Backdrop'
import swal from 'sweetalert'
import authentication from '../../../utils/authentication'

const selectPrograms = [
  {
    program: '半日體驗',
    price: ['單人 NT$ 1,200', '雙人 NT$ 2,000', '四人 NT$ 3,500'],
    time: ['09:00 - 12:00', '14:00 - 17:00'],
  },
  {
    program: '一日體驗',
    price: ['單人 NT$ 2,000', '雙人 NT$ 3,600', '四人 NT$ 5,500'],
    time: ['09:00 - 17:00'],
  },
]

function formatDate(d) {
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const defaultDate = new Date()
const defaultPlace = '請選擇店鋪'

const initialFormData = Object.freeze({
  form__place: defaultPlace,
  form__program: selectPrograms[0].program,
  form__calendar: defaultDate,
  form__time: selectPrograms[0].time[0],
  form__price: selectPrograms[0].price[0],
})

function CourseForm(props) {
  const { placeLatLng, sentCollect } = props
  // 預設值
  const [place, setPlace] = useState(defaultPlace)
  const [dateValue, setDateValue] = useState(defaultDate)

  const defaultProgram = {
    selectProgram: selectPrograms[0].program,
    selectPrice: selectPrograms[0].price[0],
    selectTime: selectPrograms[0].time[0],
  }

  // Modal開關
  const [showModal, setShowModal] = useState(false)
  // 連動下拉式選單
  const [doSelect, setDoSelect] = useState({
    selectProgram: selectPrograms[0].program,
    selectPrice: selectPrograms[0].price[0],
    selectTime: selectPrograms[0].time[0],
  })

  // 送出表單
  const form = useRef(null)
  const [formData, updateFormData] = useState(initialFormData)
  // 將更改表單內容存進formData
  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value.trim(),
  //   });
  // };

  //-------------------------將表單資料送至資料庫
  async function sentCourseFromServer() {
    const executor = async (token) => {
      const url = `http://localhost:6005/getCourseForm`
      // 被用來複製一個或多個物件自身所有可數的屬性到另一個目標物件
      const formDataInfo = { ...formData }
      //處理日期格式
      formDataInfo.form__calendar = formatDate(formDataInfo.form__calendar)

      // console.log(JSON.stringify(formDataInfo))
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(formDataInfo),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer ' + token,
        }),
      })
      const response = await fetch(request)
      const data = await response.json()
      // console.log('報名成功!', data)
    }
    authentication(executor)
  }
  //-------------------------------------------------
  //點選報名按鈕
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(JSON.stringify(formData));
    // ... submit to API or something
    swal('報名成功!', {
      button: false,
      timer: 2000,
    })
    sentCourseFromServer()
  }

  // 連動下拉式選單 onChange + 更新formData
  const changeProgram = (e) => {
    selectPrograms.map((v, i) => {
      if (e.target.value === v.program) {
        setDoSelect({
          selectProgram: e.target.value,
          selectPrice: v.price[0],
          selectTime: v.time[0],
        })

        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
          form__price: v.price[0],
          form__time: v.time[0],
        })
      }
      return true
    })
  }
  const changeTime = (e) => {
    setDoSelect({
      selectProgram: doSelect.selectProgram,
      selectPrice: e.target.value,
      selectTime: e.target.value,
    })
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }
  const changePrice = (e) => {
    setDoSelect({
      selectProgram: doSelect.selectProgram,
      selectPrice: e.target.value,
      selectTime: e.target.value,
    })
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const programs = selectPrograms.map((v, i) => {
    return <option key={i}>{v.program}</option>
  })

  const times = selectPrograms.map((v, i) => {
    if (doSelect.selectProgram === v.program) {
      return v.time.map((v, i) => <option key={i}>{v}</option>)
    }
    return true
  })

  const prices = selectPrograms.map((v, i) => {
    if (doSelect.selectProgram === v.program) {
      return v.price.map((v, i) => <option key={i}>{v}</option>)
    }
    return true
  })

  // Modal開關

  function showModalHandler() {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }
  function closeModalHandler() {
    setShowModal(false)
    document.body.style.overflow = 'visible'
  }

  // setDateValue + handleChange 日曆
  function onCalendarChange(newDate) {
    setDateValue(newDate)

    updateFormData({
      ...formData,
      form__calendar: newDate,
    })
  }
  // setPlace + handleChange 地點
  function onPlaceChange(newPlace) {
    setPlace(newPlace)
    updateFormData({
      ...formData,
      form__place: newPlace,
    })
  }

  // 重設表單
  function resetForm() {
    setPlace(defaultPlace)
    setDateValue(defaultDate)
    setDoSelect(defaultProgram)
  }
  // 增加收藏
  function addCollect() {
    swal('收藏成功!', {
      button: false,
      timer: 2000,
    })
    sentCollect()
  }
  return (
    <>
      <div className="recheck__width d-flex justify-content-end">
        <button className="recheck_box" onClick={resetForm}>
          <FiRotateCcw data-feather="rotateccw" className="recheck__icon" />
          重選
        </button>
      </div>
      <form className="course__select__form" method="POST" ref={form}>
        <div className="fontContent">
          <div className="block_select">
            <label className="labelText">地點</label>
            <input
              type="button"
              name="form__place"
              value={place}
              className="palce__select"
              onClick={showModalHandler}
            />
          </div>

          <div className="block_select">
            <label className="labelText">方案</label>
            <div className="select-style">
              <select
                name="form__program"
                value={doSelect.selectProgram}
                onChange={changeProgram}
              >
                {/* <option value="半日體驗">半日體驗</option>
                <option value="一日體驗">一日體驗</option> */}
                {programs}
              </select>
            </div>
          </div>

          <div className="block_select">
            <label className="labelText">日期</label>

            <Calendar
              name="form__calendar"
              onChange={onCalendarChange}
              value={dateValue}
              calendarType={'US'}
              // formatDay={(locale, date) => {
              //   console.log('locale', locale);
              //   console.log(date);
              //   return new Intl.DateTimeFormat(locale, {
              //     day: '2-digit',
              //   }).format(date);
              // }}
            />
          </div>

          <div className="block_select">
            <label className="labelText">時間</label>
            <div className="select-style">
              <select name="form__time" onChange={changeTime}>
                {times}
                {/* <option className="time">09:00 - 12:00</option>
                <option className="time">14:00 - 17:00</option> */}
              </select>
            </div>
            <label className="labelText">人數</label>
            <div className="select-style">
              <select
                name="form__price"
                value={doSelect.selectPrice}
                onChange={changePrice}
              >
                {/* <option value="">單人 NT$ 1,200</option>
                <option value="">雙人 NT$ 2,000</option>
                <option value="">四人同行一人免費 NT$ 3,500</option> */}
                {prices}
              </select>
            </div>
            <div className="btn_group">
              <button className="btn" type="submit" onClick={handleSubmit}>
                報名
              </button>
              <div className="loveBox">
                <FiHeart
                  data-feather="heart"
                  className="far"
                  onClick={addCollect}
                />
              </div>
            </div>
          </div>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && (
          <CourseMapModal
            closeModalHandler={closeModalHandler}
            setSelectForm={onPlaceChange}
            placeLatLng={placeLatLng}
          />
        )}
      </form>
    </>
  )
}
export default CourseForm
