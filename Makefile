github:
	git checkout gh-pages
	git pull

	mv resources/public/* .

	git add .
	git commit -m "updated"
	git push origin "gh-pages"
	git checkout master