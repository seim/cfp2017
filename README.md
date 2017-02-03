### Call for papers SEIM'17

To sync `gh-pages` branch with last dist run `make deploy`. See Makefile for details.

Workflow:

1. Run grunt watch task. Edit css only in `scss` directory.
2. When you are ready to deploy, run shell cmd `make deploy`. 
It will copy `app` dir to `dist` and post-process it with grunt (see grunt `dist` task in Gruntfile.js), 
        create a commit with dummy message (it's OK due to `dist/` must be totally sync with `app/` 
        except post-process actions. Or you loose data, of course)
On next step it will push commit to `gh-pages` branch which is used as source for github pages site.
Last step - sync `master` branch.
