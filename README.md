# Metroquiz frontend

## Description

It is no secret that the Moscow metro is one of the most beautiful subway in the world. Behind its beauty lies the history of the city. Unfortunately, not all children and teenagers know their place of residence well. On this basis, the idea of creating an online quiz from which students can learn more about the creation and culture of Moscow was born.
The essence of such game is to pass a given route on the Moscow metro faster than everyone else from your class. During the journey, schoolchildren must answer tricky questions about the station where they are at some point in the game.  

#### Background
Each Moscow metro station is dedicated to an event, a famous person or a landmark place. This subway was opened in 1935. Over the years, 322 stations have been opened, each of which has a piece of the deep history of Moscow. Unfortunately, students do not know much about the history of their city, so it was decided to create an interesting online quiz, the questions of which will be related to the subway.

#### Key concept
**Moscow metro** - this is a widely used mode of public transport in the capital of the Russian Federation. Its trains run underground, which speeds up the movement of the big city.

**Online-quiz** - this is a game in which you need to answer the questions posed. For a correct answer, points are added to the total score.

#### Description of the game process

The game field is a map of the Moscow Metro. A team of students is assigned a specific route containing a set of consecutive stations. Each stop contains a tricky question. If the team answers correctly, then they move on. The winner is the one who gets to the final point the fastest.
Description of the game hosting

There is a teacher panel for creating the game, questions and running it.

## Game development
First, we had to prepare a map for the field of the game. To do this, the svg-file was parsed. Such script was written in Python3.
Then we started working on the backend. Users, commands, routes, a question for each station — all this was implemented in the Vapor framework of the Swift language.
At the very end, frontend was implemented using Vue.js: part of the creation of the game, as well as the process of the game itself.

## Demo
**Link for russian version** 👉 https://www.youtube.com/watch?v=puRFLKQw0zE

**Link for english version** 👉 https://www.youtube.com/watch?v=ykal0mdLOPI

**🇷🇺Russian vesrion**  

<a href="http://www.youtube.com/watch?feature=player_embedded&v=puRFLKQw0zE" target="_blank"><img src="http://img.youtube.com/vi/puRFLKQw0zE/0.jpg" 
alt="demo" width="240" height="180" border="10" /></a>

**🇬🇧English version🇱🇷** 

<a href="http://www.youtube.com/watch?feature=player_embedded&v=ykal0mdLOPI" target="_blank"><img src="http://img.youtube.com/vi/pV6GjLf4grI/0.jpg" 
alt="demo" width="240" height="180" border="10" /></a>  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
