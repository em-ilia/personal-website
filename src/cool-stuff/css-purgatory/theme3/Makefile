watch_scss:
	sass -w scss/:css/

scss:
	sass scss/:css/

server:
	python3 -m http.server

dev:
	make -j 2 watch_scss server

clean:
	rm css/*
