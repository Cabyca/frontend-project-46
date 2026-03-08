import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended, // Базовые рекомендации JS
  stylistic.configs.recommended, // Стилистические правила
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest, // Добавляем Jest, чтобы линтер не ругался на test/expect
      },
    },
    rules: {
      // Здесь можно переопределить правила, если нужно
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
]
