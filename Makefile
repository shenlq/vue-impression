
default: run

.PHONY: default

install:
	sudo npm install tnpm -g --registry=http://registry.npm.alibaba-inc.com
	sudo tnpm install -g grunt-cli bower
	tnpm install
	bower install

run:
	grunt


deploy:
	grunt build
	NODE_ENV=production webpack -p --config webpack.prod.config.js
