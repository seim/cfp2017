### Call for papers SEIM'17

Project structure:

app/  # project sources, except css/ directory. Css sources stored in scss/
dist/  # Output files, which will be synced with `gh-pages` branch. **Don't change them by hand or you can lose data!**
scss/  # css sources


Some reminders about how to work with this repo:

Create git repository, synced with `gh-pages` branch inside `dist/` dir.

``` 
cd dist/
git clone https://github.com/seim/cfp2017.git
git checkout --track -b gh-pages origin/gh-pages
```

Project sources stored in `app` dir. Run grunt `watch` task. Now you have livereload for html and css. **Don't forget to edit css only in `scss` directory.**

When you are ready to deploy, run shell cmd `make deploy`. 
It will copy `app` dir to `dist` and post-process it with grunt (see `dist` task in Gruntfile.js), 
create a commit with dummy message (it's OK due to `dist/` must be totally sync with `app/` except post-process actions. Or you loose data, of course).
On next step it will push commit to `gh-pages` branch which is used as source for github pages site.
Last step - sync `master` branch.
