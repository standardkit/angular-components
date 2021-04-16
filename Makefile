watch : ; ng build standardkit --watch

build : ; ng build standardkit --prod

hot : ; ng build standardkit --watch

publish : ; npm publish ./dist/standardkit --access public

link : ; cd dist/standardkit && npm link

unlink : ; cd dist/standardkit && npm unlink
