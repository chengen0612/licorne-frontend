import myswal from './sweetalert'

const authentication = (success, ...params) => {
  // console.log('params', ...params)
  const token = localStorage.getItem('jwt')
  if (!token) return myswal.pleaseLogin()
  success(...params, token)
}

export default authentication
