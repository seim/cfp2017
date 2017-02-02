## Call for papers SEIM'17

```
grunt dist
# remove livereload.js from html/index.html and html/en.html
```

```
# Init gh-pages branch
git checkout --orphan gh-pages
git rm --cached -r .
git checkout master html/ .
git commit -m 'initial commit'
```

```
# To sync gh-pages branch with last dist
git checkout gh-pages
git checkout master html/ .
git commit -m '...'
```

# TODO: Explore yeoman ecosystem next time
