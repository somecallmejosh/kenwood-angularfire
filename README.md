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
- Delete `dist` folder
- Run `grunt build`
- Add and commit edits
- run `grunt buildcontrol:pages`
  - This will push the distrubtion folder to the appropriate branch

##TODO:

- bar on pages with facebook, twitter, instagram pins...I've been hearing of the success in marketing with pinning the website to twitter so I'd like to have that connection there for this site.
- soundcloud mini bar on the front page so someone can listen to his music right from the front page. Not something that starts up automatically so as not to be intrusive but something right there where they can hit play....

- the html input for the buy button is not being recognized. So when I create a paypal button, it gives me the button in html format. I am sure you are familiar with what I am talking about. When I cut and paste the html into the line called "paypal link" it doesn't recognize the html code (or at least that what seems to be the problem)

- Should we serve all the pics from kenwoods google drive or from your dropbox? if from kenwood's google drive, how do we change all the headline jpgs to point to that?
- can we have a video lesson on the lessons page as well as the written exercises?
- we decided to put up a different lesson for now and replaced 9 brain with a different lesson called "Three phase practice procedure" Can you change the jpg to reflect that?