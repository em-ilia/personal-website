clean:
	rm -rf css/*

css:
	sass scss:css

css-watch:
	sass -w scss:css

server:
	python -m http.server

dev:
	make -j 2 css-watch server
