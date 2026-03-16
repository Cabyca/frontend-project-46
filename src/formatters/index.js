import stylishRender from './stylishRender.js'
import plainRender from './plainRender.js'
import jsonRender from './jsonRender.js'

const format = (astTree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylishRender(astTree)
    case 'plain':
      return plainRender(astTree)
    case 'json':
      return jsonRender(astTree)
    default:
      throw new Error(`Unknown format: ${formatName}`)
  }
}

export default format
