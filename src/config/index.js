const domainName = {
  debug: true,
  develop: 'http://localhost:3000',
  release: '',
}

const baseUrl = domainName.debug ? domainName.develop : domainName.release

export { baseUrl }
