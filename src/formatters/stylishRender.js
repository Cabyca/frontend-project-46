import _ from 'lodash'

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value)
  }

  const indent = ' '.repeat(depth)
  const childIndent = ' '.repeat(depth + 4)

  const lines = Object.entries(value).map(
    ([key, val]) => `${childIndent}${key}: ${stringify(val, depth + 4)}`)

  return `{\n${lines.join('\n')}\n${indent}}`
}

const formatStylish = (tree, depth = 0) => {
  const indent = ' '.repeat(depth)

  const result = tree.map((node) => {
    const leftIndent = ' '.repeat(depth + 2)
    switch (node.type) {
      case 'nested':
        return `${indent}    ${node.key}: {\n${formatStylish(node.children, depth + 4)}\n${indent}    }`
      case 'added':
        return `${leftIndent}+ ${node.key}: ${stringify(node.value, depth + 4)}`
      case 'removed':
        return `${leftIndent}- ${node.key}: ${stringify(node.value, depth + 4)}`
      case 'unchanged':
        return `${indent}    ${node.key}: ${stringify(node.value, depth + 4)}`
      case 'changed':
        return [
          `${leftIndent}- ${node.key}: ${stringify(node.value1, depth + 4)}`,
          `${leftIndent}+ ${node.key}: ${stringify(node.value2, depth + 4)}`].join('\n')
      /* istanbul ignore next */
      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })

  return result.join('\n')
}

const stylishRender = tree => `{\n${formatStylish(tree, 0)}\n}`

export default stylishRender
