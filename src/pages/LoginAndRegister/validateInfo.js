export default function validateInfo(values) {
  let errors = {}

  if (!values.phoneReg.trim()) {
    errors.phoneReg = '請輸入手機號碼'
  } else if (values.phoneReg.length < 10) {
    errors.phoneReg = '手機號碼必須為10碼'
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.emailReg) {
    errors.emailReg = '請輸入Email'
  } else if (!/\S+@\S+\.\S+/.test(values.emailReg)) {
    errors.emailReg = '無效的Email格式'
  }

  if (!values.passwordReg) {
    errors.passwordReg = '請輸入密碼'
  } else if (values.passwordReg.length < 6) {
    errors.passwordReg = '密碼需要輸入至少6碼以上'
  }
  return errors
}
