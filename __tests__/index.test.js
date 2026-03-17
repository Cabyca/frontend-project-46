import { getFixturePath, readFile } from '../src/utils/helpers.js'
import genDiff from '../src/index.js'

test.each(['json', 'yml'])('test nested data structures %s', (extension) => {
  const path1 = getFixturePath(`file1.${extension}`)
  const path2 = getFixturePath(`file2.${extension}`)
  expect(genDiff(path1, path2)).toEqual(readFile('diffStylish.txt'))
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
