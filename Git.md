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
