const parser = (dataRaw, extensionFile) => {

switch (extensionFile) {
  case 'json':
    console.log('Распарсенные данные')
    return JSON.parse(dataRaw)
  case 'yml':
  case 'yaml':
    console.log('yaml')
  default:
    throw new Error(`Unknown format: ${extensionFile}`)
}

}

export default parser