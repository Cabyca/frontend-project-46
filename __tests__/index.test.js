import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, test } from '@jest/globals'

// Шаг 2: Вычисление «где я нахожусь»
// Поскольку в современных JS-модулях (ESM) нет готовой переменной __dirname, код создает её вручную:
// import.meta.url: берет адрес текущего файла теста (в формате file://...).
// fileURLToPath: превращает этот адрес в обычный путь (например, /home/user/project/__tests__/index.test.js).

const __filename = fileURLToPath(import.meta.url)
console.log(__filename) // /home/alex/frontend-project-46/__tests__/index.test.js
const __dirname = path.dirname(__filename)
console.log(__dirname) // /home/alex/frontend-project-46/__tests__/index.test.js

import genDiff from '../src/index.js'

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
console.log(getFixturePath)
const readFixtureFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')
console.log(readFixtureFile)

test('genDiff should return correct diff in stylish format', () => {
  // 1. Получаем пути к входным файлам
  const path1 = getFixturePath('file1.json')
  const path2 = getFixturePath('file2.json')

  // 2. Читаем ожидаемый результат из фикстуры (эталон)
  const expectedResult = readFixtureFile('result1.txt')

  // 3. Сравниваем результат функции с эталоном
  expect(genDiff(path1, path2)).toEqual(expectedResult)
})
