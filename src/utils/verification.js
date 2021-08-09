import myswal from './sweetalert'

const verify = {}

verify.identity = (success) => {
  const token = localStorage.getItem('jwt')
  if (!token) return myswal.pleaseLogin()
  success()
}

export default verify
