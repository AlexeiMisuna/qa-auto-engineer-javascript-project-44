install: # Установить зависимости
	npm ci

runBrainGames: # Запустить игру
	node bin/brain-games.js

publish: # Отладка публикации
	npm publish --dry-run

make lint: # Запуск линтера
	npx eslint

runBrainEven: # Запустить игру
	node bin/brain-even.js