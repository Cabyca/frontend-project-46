
install: # установить зависимости
	npm ci

lint:
	npx eslint .

lint-fix: # исправление ошибок
	npx eslint . --fix


test-coverage:
	npm test -- --coverage --coverageProvider=v8