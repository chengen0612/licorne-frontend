const domainPath = {
  debug: true,
  developUrl: 'http://localhost:3000',
  releaseUrl: '',
}
export const serverUrl = 'http://localhost:6005'

const imgPath = domainPath.debug ? domainPath.developUrl : domainPath.releaseUrl

export { imgPath }
