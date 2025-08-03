install: # Установить зависимости
	npm ci

runGame: # Запустить игру
	node bin/brain-games.js

publish: # Отладка публикации
	npm publish --dry-run