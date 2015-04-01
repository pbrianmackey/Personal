#MongoDB

Mongo is a document management type DB written in C++.

####Consistency - Delay between replication.
  - Complete:  Return is not returned until all servers are updated.

####mongo.exe (shell)
####mongod (daemon)

##Sharding

Horizontal scaling (adding more machines that behave like a single node).

*Vertical scaling in contrast is adding more resources (cpu, memory) to a single machine.
This is good for virtualization*

##Running mongo

```
//from mongo install directory
md \data\db (default directory mongo expects)
mongod
```

###Configuration file setup

Setup options.  

####Sample config

# where data files will reside
dbpath=/path/db

# where the log file will be stored
logpath=/path/mongo-server.log

# how verbose the server will be logging
verbose=vvvvv  (this is most verbose)

using cofiguration file:  mongod -f c:\\pathToconfig\\mongod.conf


#Install as a service

Linux:  add it to init d scripts
Windows:  install as a service.  mongod -f C:\\pathtoconfig\\mongod.conf --install
"net start mongodb"


#commands
mongo (connect to server)

show dbs (what db's do you have)
 - local database is for internal use by mongo.  YOu should not save info here
 - test (mongo assumes if you don't specify a db that you are in test)

use foo (create and use new db foo)

db (say which db you are connected to)

help (shell commands)

##Replication

The primary db is the only writeable db in a replica set.  
Arbiter is a tiebreaker in the event of a failure of the primary db.  
Arbiter does not store data.  MongoDB uses a voting system to determine a new primary.  Arbiter is not required when you have an odd # of machines in the farm.   The minimum replica set possible is 3 servers.
