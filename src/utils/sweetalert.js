import swal from 'sweetalert'

swal.addCart = () => {
  swal('成功加入購物車！', {
    button: false,
    timer: 1200,
  })
}

swal.addCollection = () => {
  swal('成功加入收藏！', {
    button: false,
    timer: 1200,
  })
}

swal.popUpMessage = async (message) => {
  await swal(message, {
    button: false,
    timer: 1200,
  })
  // return after message disappear
}

swal.confirmDelete = async (func, ...params) => {
  const result = await swal({
    title: '確定要刪除嗎？',
    icon: 'warning',
    buttons: ['取消', '確定'],
    dangerMode: true,
  })
  if (!result) return
  swal({
    title: '刪除成功！',
    button: '確定',
    icon: 'success',
  })
  func(...params)
}

swal.pleaseLogin = () => {
  swal({
    title: '請登錄會員！',
  })
}

export default swal
