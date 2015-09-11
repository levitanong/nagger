github:
	# git checkout gh-pages
	# git pull

	# mv resources/public/* .

	# git add .
	# git commit -m "updated"
	# git push origin "gh-pages"
	# git checkout master

	git add -f resources/public
	git write-tree --prefix resources/public | \
		xargs git commit-tree -p gh-pages -m "updated" | \
		xargs git update-ref refs/heads/gh-pages
	git reset resources/public
	git push
