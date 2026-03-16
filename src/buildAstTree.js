import _ from 'lodash'

const buildAstTree = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2))
  const sortedKeys = _.sortBy(keys)

  const astTree = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] }
    }
    if (!_.has(data2, key)) {
      return { key, type: 'removed', value: data1[key] }
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, type: 'nested', children: buildAstTree(data1[key], data2[key]) }
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { key, type: 'unchanged', value: data1[key] }
    }
    return { key, type: 'changed', value1: data1[key], value2: data2[key] }
  })
  return astTree
}

export default buildAstTree
