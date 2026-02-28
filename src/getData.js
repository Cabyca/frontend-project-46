import fs from 'fs'
import path from 'path'

const getData = (pathToFile) => {

  const absolutePath = path.resolve(pathToFile)

  console.log(absolutePath)

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`The file does not exist: ${pathToFile}`)
  }

  const dataRaw = fs.readFileSync(absolutePath, 'utf8')

  const extensionFile = path.extname(absolutePath).slice(1).toLowerCase()

  return [dataRaw, extensionFile]

  //const config = JSON.parse(data);

}

export default getData
