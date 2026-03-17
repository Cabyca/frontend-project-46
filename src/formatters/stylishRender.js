import _ from 'lodash'

// Функция для превращения любого значения в строку (с учетом вложенных объектов)
const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    // Важно: null и булевы значения приводим к строке
    return String(value)
  }

  const indent = ' '.repeat(depth)
  const childIndent = ' '.repeat(depth + 4)

  // Рекурсивно обрабатываем ключи объекта, который не является частью дерева различий
  const lines = Object.entries(value).map(
    ([key, val]) => `${childIndent}${key}: ${stringify(val, depth + 4)}`)

  return `{\n${lines.join('\n')}\n${indent}}`
}

const formatStylish = (tree, depth = 0) => {
  const indent = ' '.repeat(depth)

  const result = tree.map((node) => {
    // В Stylish знаки + и - смещены на 2 пробела влево от основного ключа
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
        // Для измененных значений выводим сначала старое (-), затем новое (+)
        return [
          `${leftIndent}- ${node.key}: ${stringify(node.value1, depth + 4)}`,
          `${leftIndent}+ ${node.key}: ${stringify(node.value2, depth + 4)}`].join('\n')
      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })

  return result.join('\n')
}

// Финальная сборка всей строки
const stylish = tree => `{\n${formatStylish(tree, 0)}\n}`

export default stylish
