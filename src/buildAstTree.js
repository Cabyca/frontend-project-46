import _ from 'lodash'

const buildAstTree = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2))
  const sortedKeys = _.sortBy(keys)

  const lines = sortedKeys.flatMap((key) => {
    if ((_.has(data1, key) && _.has(data2, key)) && (data1[key] === data2[key])) {
      return `    ${key}: ${data1[key]}`
    }

    if ((_.has(data1, key) && !_.has(data2, key))) {
      return `  - ${key}: ${data1[key]}`
    }

    if ((!_.has(data1, key) && _.has(data2, key))) {
      return `  + ${key}: ${data2[key]}`
    }

    return [
      `  - ${key}: ${data1[key]}`,
      `  + ${key}: ${data2[key]}`,
    ]
  })

  return `{\n${lines.join('\n')}\n}`
}

export default buildAstTree
