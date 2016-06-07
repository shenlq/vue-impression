
default: run

.PHONY: default

install:
	sudo npm install tnpm -g --registry=http://registry.npm.alibaba-inc.com
	sudo tnpm install -g grunt-cli bower
	tnpm install
	bower install

run:
	grunt

webpack:
	grunt clean
	NODE_ENV=production webpack -p --config webpack.prod.config.js
	grunt deploy

deploy:
	make webpack
	qrsboxcli init yZmkBSuvBPOa95u3k0gk2370mIFScnM2OD1ZiR9Y WXoHzZJA973FpOPPm0h1uRqn66ppXqWfP36ANF41 ./build dada-fe smart/0.0.2/
	qrsboxcli sync &

