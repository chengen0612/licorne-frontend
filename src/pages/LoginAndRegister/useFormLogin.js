import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import swal from 'sweetalert'

const useForm = (validate) => {
  const [loginValues, setLoginValues] = useState({
    loginPhone: '',
    loginPassword: '',
  })
  const [loginErrors, setLoginErrors] = useState({})
  const history = useHistory()
  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginValues({
      ...loginValues,
      [name]: value,
    })
  }
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setLoginErrors(validate(loginValues))
    const data = new FormData(e.target)
    // console.log(data.get('loginPhone'))
    // console.log(data.get('loginPassword'))

    async function loginToSever() {
      // 開啟載入指示
      if (loginValues.loginPhone === '') return
      if (loginValues.loginPhone.length < 10) return
      if (loginValues.loginPassword === '') return
      if (loginValues.loginPassword.length < 6) return
      const user = {
        loginPhone: loginValues.loginPhone,
        loginPassword: loginValues.loginPassword,
      }
      // 連接的伺服器資料網址
      const url = 'http://localhost:6005/loginAndRegister/login'

      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      // console.log(JSON.stringify(user))

      const response = await fetch(request)
      const data = await response.json()

      // console.log('伺服器回傳的json資料', data)
      // 要等驗証過，再設定資料(簡單的直接設定)
      if (data.code === 0) {
        localStorage.setItem('jwt', data.token)
        setTimeout(() => {
          swal('歡迎回來！', {
            buttons: false,
            timer: 2000,
          })
          history.push('/member')
        }, 500)
        // localStorage.setItem('code', data.code)
        // localStorage.setItem('userId', data.userId)
      } else
        swal('登入失敗！', {
          buttons: false,
          timer: 2000,
        })
    }
    loginToSever()
    // ex. 送到伺服器
  }

  return { handleLoginChange, handleLoginSubmit, loginValues, loginErrors }
}

export default useForm
