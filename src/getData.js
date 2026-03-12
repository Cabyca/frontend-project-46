import fs from 'node:fs'
import path from 'node:path'

const getData = (pathToFile) => {
  const absolutePath = path.resolve(pathToFile)

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`The file does not exist: ${pathToFile}`)
  }

  const dataRaw = fs.readFileSync(absolutePath, 'utf8')

  const extensionFile = path.extname(absolutePath).slice(1).toLowerCase()

  return [dataRaw, extensionFile]
}

export default getData
