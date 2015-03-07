#Aurelia (Rob Eisenburg)

aurelia.io

font-awesome

Non-monolithic.  Allows piecemeal of parts.  
- for building js clients (SPA)
- MIT License.  Open Source.  Clean Code.
- Simple conventions (inspired by Ruby, Durandal, Calibre Micro)
- Testable

Rapid Adoption & Large Active Community.  Just 100 shy of Angular right now. 10 man core team.  
Commercially backed by Durandal Inc. and partners.  
Aerilia is written entirely in ES6/ES7

Hanselman showed performance diffs in jQuery vs vanilla (find that)
No eternal dependencies except for Polyfills.
Polyfills fall away as browsers get better.
Modern 2 way data binding.  (object.observe)
Angular has dirty checking capabilities that get messy.
Commercial support.
Pathway forward for Durandal and Angular users.
Direct pathway to port from Durandal and Angular.

##Setup
- Nodejs, npm install
- npm install -g jspm
- gulp
- jspm install -y  

(They like these as basics.  They are not dependencies on aurelia.  )

start developing
- gulp watch

?John Tolkien, Clive Lewis, Owen Barfield, Charles Williams, Roger Green

?called ToDo apps dumb(is that anuglar tutorial?)

He used the Atom editor from GitHub.

Convention assumes app.js.  Convention uses app.html.  
Behavior in viewmodel.  view in html file.  
Every view starts with <template> object.
<router-view> is aerilia thing.  It flips this zone in and out.  This has to be associated with a router in the js file.

ES6

Same pattern for all app sizes: *.js, *.html (a class that matchines the name (viewmodel))

Create a no selection.js, noselection.html class in 
He created a class 
componse is a special element that allows views and viewmodels to be composed dynamically.  Same patterns for everything.  
How do you extend html with new behavior?  Add a *.js and *.html file :)

click.delegate (event delgation and direct event wireup are both used.)
Nothing is global in aerilia.  Inside t template he uses <import from="./contact-list" />

when your screen is about to active a method called activate will be called.  Router will match id by default.
candeactivate() go away from screen (warnings if data changes for example)
"navigation control" navCtrl is available via the api.
Form controls do two way data binding.  The rest of the controls do single way data binding. (value.bind)
value.one-way and value.two-way and value.one-time all supported.

"flux architecture, "react"" (he's not a fan of react)

static metadata() {} is a function provided to override default behavior in aurelia.  CustomElement and CustomAttribute will be a breaking change coming down (2 options instead of 3)

Not ready for prod.  Only been in preview for about 1 month.  He has preliminary documentation available.
Working on a CLI and Bundling.
IE9/IE10 can be supported in the future.
They are gonna teach the community how to do performance optimization.  !
Interactive documentation can write in markup and render as HTML.   
They are gonna support velocity, greensock and animatecss(?) animation libraries

rob@bluespire.com
@EisenbergEffect


