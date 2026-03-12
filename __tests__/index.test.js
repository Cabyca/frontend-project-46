import { getFixturePath, readFile } from '../src/utils/helpers.js'
import genDiff from '../src/index.js'

test('test json', () => {
  const path1 = getFixturePath('file1.json')
  const path2 = getFixturePath('file2.json') // это ПУТЬ
  const expected = readFile('result1.txt') // это ТЕКСТ
  expect(genDiff(path1, path2)).toEqual(expected)
})

// 1. Тестируем YAML (закроет строки в parsers.js)
test('genDiff should work with yml', () => {
  const path1 = getFixturePath('filepath1.yml')
  const path2 = getFixturePath('filepath2.yml')
  const expected = readFile('result1.txt')
  expect(genDiff(path1, path2)).toEqual(expected)
})

// 2. Тестируем ошибку (закроет Uncovered Lines в getData и parsers)
test('genDiff should throw error for unknown extension', () => {
  const path1 = getFixturePath('file1.txt')
  expect(() => genDiff(path1, path1)).toThrow()
})

test('genDiff should throw error for non-existent file', () => {
  const fakePath = getFixturePath('no-such-file.json')
  expect(() => genDiff(fakePath, fakePath)).toThrow()
})
