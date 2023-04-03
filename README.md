# Project-1-Noughts-and-Crosses

# Motivation
The aim of this project is to practice the skills I learnt in the first 2 weeks of the SEI course. I was asked to build a game of tic-tac-toe against a set of user stories that consituted an MVP product. The game was to be built in HTML, CSS and Javascript using the concepts we had been taught in the first two weeks.


## User Stories

Below are the MVP user stories for this project;

* As a user, I should be able to start a new tic tac toe game
* As a user, I should be able to click on a square to add X first and then O, and so on
* As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
* As a user, I should not be able to click the same square twice
* As a user, I should be shown a message when I win, lose or tie
* As a user, I should not be able to continue playing once I win, lose, or tie
* As a user, I should be able to play the game again without refreshing the page

### Bonus Features

Once these user stories were completed, I attempted to include the following bonus features into my game;

* Keep track of multiple game rounds with a win, lose and tie counter
* Allow players to customize their tokens (X, O, name, picture, etc)
* Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
* Involve Audio in your game
* Create an AI opponent: teach JavaScript to play an unbeatable game against you
* Make your site fully responsive so that it is playable from a mobile phone
* Get inventive with your styling e.g. use hover effects or animations

# Design Process

### My overall design process was split into 3 main stages;
* Conceptualising
* Building
* Refining

### Conceptualising

This stage mostly involved sketching out a rough wireframe of what I wanted the product to look like. This did not include any functionality. Below is the wireframe I designed the project to;

<img width="531" alt="image" src="https://user-images.githubusercontent.com/126505751/229548021-49ede703-d382-4227-8e50-d11c3a96cb3f.png">

This is what my final project ended up looking like
<img width="821" alt="image" src="https://user-images.githubusercontent.com/126505751/229542640-d1c5672e-e3a5-4a3c-a2e4-1efee805cffb.png">

As you can see the majority of the final product looks the same as the original apart from a few features.
* I decided to have the scores placed either side of the board so I could put a random array of quotes below the board.
* I decided to against a header and a footer and opted for a minimalist design philosophy. This is becasuse, as I started building the HTML and CSS, I liked the idea a sleek and minimalist game.

In total this stage took about 30 minutes.

### Building

In this stage I took my wireframe and built the HTML content first. This consited of a set of 9 buttons to represent the tiles encapsulated by two divs. The first div was to hold the 9 tiles, and the second was to hold that div and position it relative to the body.

I then went on to style my HTML with CSS and imported a new font called Quicksand from Google Fonts. I centered the main div with a flex and aligned it centrally both vertically and horizontally.

Once all of this was in place I started building out my Javascript. I will cover the details of the Javascript in the Design Choices section below. At a high level I split the user stories into two; those that included winning conditions, and those that did not. I built the those that did not include winning conditions first which took me up to the end of day 1. The whole of day 2 involved building the winning conditions in Javascript and modifying the HTML and CSS to include new boxes for keeping track of the players scores.

### Refining

Having the satisfied the MVP user stories I started putting some new functility into my game that addressed a few of the extra features. I added sound so when 



