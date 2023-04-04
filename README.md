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

Once all of this was in place I started building out my Javascript. I will cover the details of the Javascript in the Design Choices section below however, at a high level I split the user stories into two; those that included winning conditions, and those that did not. I built the those that did not include winning conditions first which took me up to the end of day 1. The whole of day 2 involved building the winning conditions in Javascript and modifying the HTML and CSS to include new boxes for keeping track of the players scores.

### Refining

Having the satisfied the MVP user stories I started putting some new functility into my game that addressed a few of the extra features. I added sound when;

* A tile was clicked
* A player won
* The result was a draw
* The play again button was clicked

I will cover some of the problems I faced with the other bonus features in the Problems section below.

# Design Decisions

### Using Buttons for the Tiles

* Initially I used divs for tiles but I found that the condition for not allowing a player to click the same tile twice, and not allowing a player to click a tile after a game finished to be more difficult than expected.
* I then decided to use HTML buttons for the tiles as this allowed me to easily call the 'disabled' method on my tiles.

```
buttons.disabled = 'true'
```
### Keeping Track of a Players' Turn

* I decided to keep a running count of how many clicks there had been on a tile by declaring a global variable and incrementing it each time a button was clicked.
* This allowed me to keep track of which players turn it was due to the fact that X would always start and therefore would always be on an even number of clicks.
* Every time a button was clicked two IF statements would be checked to see if the total numbers of clicks was odd or even.
* This also allowed me to set a condition for drawing as a draw would only happen when the board is full and the board is fully populated.

### Winning Conditions

* In order to determine if there was a win I first decided to build a three dimensional array of my tiles that would mimic the playing board. With the [0],[0] element being the first tile and so on. The image below demonstrates this concept.

<img width="323" alt="image" src="https://user-images.githubusercontent.com/126505751/229553849-03050cbb-73bc-401e-83e5-f04db77704df.png">

* I then defined a function (isThereAWinner) that would have a for loop to iterate over all the rows, a for loop to iterate over all the columns and then two IF statements to check the diagonals.
* If there were three consecutive X's or O's in any of these conditions I would increment a global variable to keep track of the number of wins assocaited with X's or O's.
* This function was called inside the for loop that set the event listeners on the tiles.
* The event listener would be created first, then two IF statements would be checked, after this the whole state of the board would be checked by the winning conditions function.

# Unsolved Problems

### Computer Generated Responses

* Some of the design choices I made at the beggining of the project made some of the requirements easier to fulfil, and some more difficult.
* My choice of having the click count determine which player and hence, which symbol, would be populated in a tile made the user story around computer generated responses difficult to fulfil.
* In my game the concept of a Player doesn't really exist, I just have that if the clickSum is even an X is put down, and if it's odd a O is put down.
* This made it difficult to have a user select whether to play against a human or computer and I ran out of time to finish this feature.

# Improvements

### Inefficient Code

* This code operates with three main functions;

  * isThereAWinner - My function for checking if winning conditions have been met.
  * whatIsTheOutcome - Function for deciding if it is a win or draw
  * whoIsTheWinner - Function for deciding if Player 1 or 2 wins.

* The first point to note is that whatIsTheOutcome and whoIsTheWinner contain very similar code and could be combined into function that checks both operations at the same time.
* The second point to note is that these three functions are called every time a player clicks a tile. This seems to be quite an inefficient way of running this game.
* The function that would take longest to exectue is the winning conditions function and it checks the whole board for every possible winning combination, every time a tile is clicked.
* An improvement here could be to modify the code so that it only starts calling this function when it is possible that a win could've happened, i.e. when the click count reaches 5 (starting at 0).

### Object Orientated

* The whole Javascript code is held within one file. Which makes it a little difficult to follow.
* A further improvement could be to split the code out into different classes (one to represent Player 1 and one for Player 2).
* When a player starts a new player object could be instantiated from the respective class.



