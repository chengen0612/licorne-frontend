import { useState, useEffect } from 'react'

const useForm = (validate) => {
  const [loginValues, setLoginValues] = useState({
    loginPhone: '',
    loginPassword: '',
  })
  const [loginErrors, setLoginErrors] = useState({})

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
  }

  return { handleLoginChange, handleLoginSubmit, loginValues, loginErrors }
}

export default useForm
