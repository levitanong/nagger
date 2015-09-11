github:
	#git add -f resources/public
	#git write-tree --prefix resources/public | \
	#	xargs git commit-tree -p gh-pages -m "updated" | \
	#	xargs git update-ref refs/heads/gh-pages
	#git reset resources/public
	#git push
	git subtree push --prefix resources/public origin gh-pages
