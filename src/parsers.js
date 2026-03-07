import yaml from 'js-yaml'

const parsers = (dataRaw, extensionFile) => {

switch (extensionFile) {
  case 'json':
    return JSON.parse(dataRaw)
  case 'yml':
  case 'yaml':
    //yaml.load
    return console.log('yaml')
  default:
    throw new Error(`Unknown format: ${extensionFile}`)
}

}

export default parsers