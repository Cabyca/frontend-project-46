import yaml from 'js-yaml'

const parsers = (dataRaw, extensionFile) => {
  switch (extensionFile) {
    case 'json':
      return JSON.parse(dataRaw)
    case 'yml':
    case 'yaml':
      return yaml.load(dataRaw)
    default:
      throw new Error(`Unknown format: ${extensionFile}`)
  }
}

export default parsers
