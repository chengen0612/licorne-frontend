export default function validateInfo(values) {
  let errors = {}

  if (!values.loginPhone.trim()) {
    errors.loginPhone = '請輸入手機號碼'
  } else if (values.loginPhone.length < 10) {
    errors.loginPhone = '手機號碼必須為10碼'
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.loginPassword) {
    errors.loginPassword = '請輸入密碼'
  } else if (values.loginPassword.length < 6) {
    errors.loginPassword = '密碼需要輸入至少6碼'
  }
  return errors
}
