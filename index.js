var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Ramana",
    score: 3,
  },
{
    name: "Chaya",
    score: 3,
  },

  {
    name: "Bhavya",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "The founder of facebook",
  answer: "Mark Zuckerberg"
}, {
  question: "Who founded Medium?",
  answer: "Ev Williams"
},
{
  question: "Who is the owner of the Instagram?",
  answer: "Facebook"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " Are you a social media user? So let's play a quiz and see.");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you are there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


