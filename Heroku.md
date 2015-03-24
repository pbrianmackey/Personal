##Heroku

###Prerequisites

- install heroku toolbelt

####Setup

- cd to your git repository
- Ensure project has a file called Procfile
 - Procfile contains the startup command that heroku will run to start the app
 - sample contents: web: node index.js // declares that this process type will
 be attached to the HTTP routing stack of Heroku, and receive web traffic when
 deployed.
 Procfiles can contain additional process types. For example, you might declare
 one for a background worker process that processes items off of a queue.

- heroku create
- git push heroku master
- Verify working:  heroku open


####Environment variables
- Stored in .env file
  - Sample contents: `TIMES=2`
- accessed via `process.env.TIMES`
- Set config var on heroku: heroku config:set TIMES=2
- View config variables: heroku config

####Commands

- Start the app locally for testing:  foreman start web
- View logs: heroku logs --tail
- Dyno count: heroku ps
- Scale Dynos Up: heroku ps:scale web=2
- Scale dynos down: heroku ps:scale web=1
- Setup logging: heroku addons:add papertrail
- List addons:  heroku addons
- Open log:   heroku addons:open papertrail
- Start a console:  heroku run node
- Start bash in a dyno: heroku run bash (get your app's environment. type exit
to quit)


###Databases

- See add-on marketplace.
  - Add a DB:  heroku addons:add heroku-postgresql:hobby-dev (Free up to 10k rows)
    - Requires https://www.npmjs.com/package/pg
    - Create table: heroku pg:psql
     - create table: `create table test_table (id integer, name text);`
     - insert row: `insert into test_table values (1, 'hello database');`
  - Larger DB: http://fabscode.tumblr.com/post/68519603807/port-your-heroku-database-to-aws
- Run Heroku Config to see DATABASE_URL: heroku config

##Continued reading

- https://devcenter.heroku.com/articles/how-heroku-works ()
- https://devcenter.heroku.com/categories/nodejs (deploy existing nodejs app)
