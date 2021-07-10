const domainPath = {
  debug: true,
  developUrl: 'http://localhost:3000',
  releaseUrl: '',
}

const imgPath = domainPath.debug ? domainPath.developUrl : domainPath.releaseUrl

export { imgPath }
