import { getFixturePath, readFile } from '../src/utils/helpers.js'
import genDiff from '../src/index.js'

test.each(['json', 'yml'])('test nested data structures %s', (extension) => {
  const path1 = getFixturePath(`file1.${extension}`)
  const path2 = getFixturePath(`file2.${extension}`)
  expect(genDiff(path1, path2)).toEqual(readFile('diffStylish.txt'))
})

test.each(['json', 'yml'])('test plain data structures %s', (extension) => {
  const path1 = getFixturePath(`file1.${extension}`)
  const path2 = getFixturePath(`file2.${extension}`)
  expect(genDiff(path1, path2, 'plain')).toEqual(readFile('diffPlain.txt'))
})

test.each(['json', 'yml'])('test json data structures %s', (extension) => {
  const path1 = getFixturePath(`file1.${extension}`)
  const path2 = getFixturePath(`file2.${extension}`)

  const result = genDiff(path1, path2, 'json')
  const expected = readFile('diffJson.txt').trim()

  expect(JSON.parse(result)).toEqual(JSON.parse(expected))
})

test('genDiff should throw error for unknown extension', () => {
  const path1 = getFixturePath('file1.txt')
  expect(() => genDiff(path1, path1)).toThrow()
})

test('genDiff should throw error for non-existent file', () => {
  const fakePath = getFixturePath('no-such-file.json')
  expect(() => genDiff(fakePath, fakePath)).toThrow()
})

test('genDiff should throw error for unknown format', () => {
  const path1 = getFixturePath('file1.json')
  const path2 = getFixturePath('file2.json')
  expect(() => genDiff(path1, path2, 'unknownFormat')).toThrow()
})

test('genDiff should throw error for unknown extension', () => {
  const path1 = getFixturePath('file1.txt')
  expect(() => genDiff(path1, path1)).toThrow()
})
