import getData from './getData.js'
import parsers from './parsers.js'
import buildAstTree from './buildAstTree.js'
import format from './formatters/index.js'

const genDiff = (pathToFile1, pathToFile2, formatName = 'stylish') => {
  const [dataRaw1, extensionFile1] = getData(pathToFile1)
  const [dataRaw2, extensionFile2] = getData(pathToFile2)

  const data1 = parsers(dataRaw1, extensionFile1)
  const data2 = parsers(dataRaw2, extensionFile2)

  const astTree = buildAstTree(data1, data2)

  const resultOfDiff = format(astTree, formatName)

  return resultOfDiff
}

export default genDiff
