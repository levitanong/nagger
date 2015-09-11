github:
	git checkout gh-pages
	git pull

	# mv resources/public/* .

	# git add .
	# git commit -m "updated"
	# git push origin "gh-pages"
	# git checkout master

	git add -f build
	git write-tree --prefix build | \
		xargs git commit-tree -p gh-pages -m "updated" | \
		xargs git update-ref refs/heads/gh-pages
	git reset build
	git push
