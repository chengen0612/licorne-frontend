import swal from 'sweetalert'

swal.addCart = () => {
  swal('成功加入購物車', {
    button: false,
    timer: 1200,
  })
}

swal.addCollection = () => {
  swal('成功加入收藏', {
    button: false,
    timer: 1200,
  })
}

swal.popUpMessage = (message) => {
  swal(message, {
    button: false,
    timer: 1200,
  })
}

export default swal
