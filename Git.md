DVCS : Distributed version control system.  That's what git uses.

Drawbacks:

no locking.  Initial setup may take longer.

##Configuration

git config --global user.name "Brian Mackey"
git config --global user.email "mackey.brian@gmail.com"
git config --global core.editor vim (notepad, notepad++, Atom?)
git config --global help.autocorrect 1 #fuzzy match commands
git config --global color.ui auto #colorize output (except when scripting it won't for logging to be clean)
git config --global core.autocrlf true #true convers crlf into just lf
,false means do nothing, input means convert crlf to lf on input only

####List options
git config --global --list


####Local repository options
cat .git/config
git config --list

##Configs are hierarchical

System < User < Repo

System: git config --system (/etc/gitconfig)

User: git config --global (~/.gitconfig)

Repository-level:  git config (.git/config of each repo)


##Diff lookups

git diff HEAD~1..HEAD (difference between previous commit and the latest commit)
git diff HEAD~1.. (shorthand for the same thing)
git add -u (add all updated files to staging.  Changes and deletions of files previously committed to git.)
git add -A (all files including untracked).

##Undo changes to the working copy.

git checkout <filename> (undo, grabs head version)
git reset --hard (reset working copy back to head.)

##Undo/redo changes in the repository

git reset --soft HEAD~1 (undo last commit, keep changes in working copy)
git reset --hard HEAD~1 (undo last commit, discard changes)

##Clean the working copy

Removes untracked files.  If you have a file shown that you don't want removed and don't want checked in then use .gitignore.


git clean -n (preview the clean)
git clean -f (clean.  -f is required)

##Working with remote repo's

pulling is a combination of fetching and merging.

git log --online | wc -l (count # of lines or commits in the repo)
git log --online -graph (show commits with branches and merges that have happened)
git shortlog (short for git log --format=short) (list authors and commits foreach)
git shortlog -sne (summary=no individual messages.  n=numeric ordering by # of commits
  and include email address)

git show head (show last commit)

git remote (show remote repositories)
git remote -v (show remote repositories verbose.  Shows url after name.)
git branch (display all local branches)
git branch -r (display all local and remote branches)
git tag (tag stable versions.)
git log origin/master (view remote commits)
git merge origin/master (merge from origin/master into current branch)

git pull (equivalent to git merge; git merge origin/master)

git branch --set-upstream master origin/master (tells git what branch remotely
  does my local branch mirror.  
  The syntax is:  git branch --set-upstream <localbranch> <remotebranch>)

Alternatively you can specify the remote branch and name each time or as a one off:

git pull origin master

The act of cloning can be setup to set upstream branches for you automatically.
The jQuery repository does this somehow.


###Versioning

git tag v1.0
git tag -a v1.0_with_message (goes to default editor.  or add -m)
git tag -s v1.0_signed (official commit for security.)

By default git will not push tags.  Use
git push --tags

####Pushing to remote

git commit -am "message" (add and commit.  if remote is https you put in password.
  ssh no password).

####Fast Forward Merge

Occurs when you simply apply new commit(s) on top of current without merge/modification.

###Protocols
http(s)/ssh/file nd git.  git protocol is a readonly url that only allows anonymous.  
not firewall friendly (9418).
File protocol is for playing around locally.



####Origin is the git convention for showing where a repo came from.

##Branching

visualizing branches:

git log --graph --online (graph of commits)
git log --graph --online --all --decorate (graph all branches.  visual branches, tags, head label)
