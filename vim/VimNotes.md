#VIM Stuff

- To modify vim you create a ~/.vim directory and copy stuff to it (colors folder, vimrc, gvimrc etc)
- Edit a file: "e: filename"
- Navigate current directory: "e: ."
- Visual Mode: "V", characterwise visual mode "v"
- Open a file with vim: "vim -N filename"
- Configuration files
 - ~/.vimrc (most settings here)
 - ~/.gvimrc (graphic only settings)
 - ~/.vim/ (plugins, language options, colors)
  (vimrc and gvimrc go into home directory.  .vim directory is 3rd party configuration files)
 - :help filetype (information on filetypes supported by vim)

  You can store your files whereever then symlink them to MacVim directory:

  ln -nfs ~/Programming/Personal/vimrc /Applications/MacVim.app/Contents/Resources/vim
  ln -nfs ~/Programming/Personal/gvimrc /Applications/MacVim.app/Contents/Resources/vim

  - options
   - :options (show all options)
   - :set (see all options differing from their default values)
   - :scriptnames (See all scripts used by vim)
   -:set list : Show tabs and end of line characters
   - :set softtabstop=2 : # of spaces to insert for a tab (sts = short form)
   - :verbose set <optionname> (tells you where an option was set).  Does not tell you options that were set by hand or not set.
   - Plugins:  Peepcode, 
   
###vim configuration files are simple sequences of commands just like you would type them in a live session (omit :).

