import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const getFixturePath = filename => path.resolve(__dirname, '../../__fixtures__', filename)
export const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')
