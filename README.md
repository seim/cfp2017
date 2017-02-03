### Call for papers SEIM'17

Workflow:

Project source stores in `app` dir.

Run grunt watch task. **Don't forget to edit css only in `scss` directory.** 
When you are ready to deploy, run shell cmd `make deploy`. 
It will copy `app` dir to `dist` and post-process it with grunt (see grunt `dist` task in Gruntfile.js), 
create a commit with dummy message (it's OK due to `dist/` must be totally sync with `app/` except post-process actions. Or you loose data, of course).
On next step it will push commit to `gh-pages` branch which is used as source for github pages site.
Last step - sync `master` branch.
