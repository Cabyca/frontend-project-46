
install: # установить зависимости
	npm ci

lint: # запуск линтера
	npm run lint

lint-fix: # автоматическое исправление ошибок стиля
	npm run lint:fix

test: # запуск тестов
	npm test

test-coverage: # запуск тестов с отчетом для SonarCloud
	npm run test:coverage
