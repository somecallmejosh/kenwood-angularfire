Kenwood Dennard
===============

Web app for my drum instructor Kenwood Dennard. Utilizes the following features:

* Firebase/AngularFire BaaS
* AngularJS
* Bootstrap

I know it's uncommon to include `bower_components` and the `dist` directories in the repo. This project uses GitHub Pages, and these folders are needed in the `gh-pages` branch. One day I'll explore how to build this on the fly in the subtree.

##Build Control

This project uses [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control) to push the distribution folder to the `gh-pages` branch. 

###Work Flow

- In Master branch - make edits
- Add and commit edits
- run `grunt buildcontrol:pages`
  - This will push the distrubtion folder to the appropriate branch