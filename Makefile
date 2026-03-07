
install: # установить зависимости
	npm ci

test-coverage:
	npm test -- --coverage --coverageProvider=v8