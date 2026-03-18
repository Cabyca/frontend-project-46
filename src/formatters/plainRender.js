import _ from 'lodash'

const stringify = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return String(value)
}

const plainRender = (tree, path = '') => {
  const lines = tree
    .map((node) => {
      const currentPath = path === '' ? node.key : `${path}.${node.key}`

      switch (node.type) {
        case 'nested':
          return plainRender(node.children, currentPath)
        case 'added':
          return `Property '${currentPath}' was added with value: ${stringify(node.value)}`
        case 'removed':
          return `Property '${currentPath}' was removed`
        case 'changed':
          return `Property '${currentPath}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`
        case 'unchanged':
          return null
        /* istanbul ignore next */
        default:
          throw new Error(`Unknown type: ${node.type}`)
      }
    })
    .filter(line => line !== null)

  return lines.join('\n')
}

export default plainRender
