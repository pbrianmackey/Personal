#VIM Stuff

- Edit a file: "e: filename"
- Navigate current directory: "e: ."
- Visual Mode: "V", characterwise visual mode "v"
- Open a file with vim: "vim -N filename"
- Configuration files
 - ~/.vimrc (most settings here)
 - ~/.gvimrc (graphic only settings)
 - ~/.vim/ (plugins, language options, colors)
  (vimrc and gvimrc go into home directory.  .vim directory is 3rd party configuration files)

  You can store your files in your bin and symlink them to your home directory:

  ln -nfs ~/bin/dotfiles/vim/vimrc .vimrc
  ln -nfs ~/bin/dotfiles/vim .vim
  ln -nfs ~/bin/dotfiles/vim/gvimrc .gvimrc

  - options
   - :options (show all options)
   - :set (see all options differing from their default values)
   -:set list : Show tabs and end of line characters
   - :set softtabstop=2 : # of spaces to insert for a tab (sts = short form)
   - :verbose set <optionname> (tells you where an option was set).  Does not tell you options that were set by hand or not set.

###vim configuration files are simple sequences of commands just like you would type them in a live session (omit :).

