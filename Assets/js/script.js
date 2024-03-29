// let startButton = document.querySelector("#start_game_button");
// let gameTimer = document.querySelector("timer");
// let answersButton = document.querySelector("answers");
// let renderResult = document.querySelector("results");
//* Don't Dwell on Dreams and forget to live.
// todo figure out why game duplicates itself after pushing the start button

//  startGame with a button click{
// when clicked these two functions will run
function startGame() {
  showTimer();
  showQuestion();
}

var countDown = 120;
var gameScore;
var finalScore;
var pausePlay = false;
var gameTimer;

// creates timer  and appeneds it to the page
function showTimer() {
  var timer = document.querySelector("#timer");
  gameTimer = setInterval(function () {
    countDown--;
    timer.textContent = countDown;
    if (countDown <= 0) {
      clearInterval();
      stopGame();
      gameScore = countDown;
    }
  }, 1000);
}

var questions = document.getElementById("questions"); //get questions el from HTML
var selection = "";
var options = document.getElementById("answers"); // get answers el from HTML
var resultsEl = document.getElementById("results"); //get results el from HTML
var currentQuestion = 0;
//*Love YOUR Life, and Love Yourself while you live it...

// loops thru the questions and answers and prints them to the page
function showQuestion() {
  questions.innerText = questionsObj[currentQuestion].hiphopQuestion; //adds questions to the page

  for (i = 0; i < questionsObj[currentQuestion].hiphopAnswer.length; i++) {
    // loops thru the answers .

    var choices = document.createElement("button"); // creates button choices from above for loop

    choices.innerHTML = questionsObj[currentQuestion].hiphopAnswer[i]; // gives choices variable the value of looped obj
    options.appendChild(choices); // shows looped obj on page

    choices.addEventListener("click", function () {
      selection = this.textContent;
      // adds onclick for the answers
      if (selection === questionsObj[currentQuestion].rightAnswer) {
        //if the right answer is selected
        countDown = countDown + 3; //add 3 seconds to the timer
        resultsEl.innerText = "Word!"; // inform user of correct selection
        nextQuestion();
      } else {
        //otherwise-wrong answer selected
        countDown = countDown - 10; // remove 10 seconds
        results.innerText = "Naahhhh Fam!"; //inform user of wrong selection
        nextQuestion(); // run the function for next question
      }
    });
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion > questionsObj.length - 1) {
    stopGame();
  } else {
    questions.innerHTML = "";
    options.innerHTML = "";
    showQuestion();
  }
}

function stopGame() {
  // stop the quiz
  clearInterval(gameTimer); // clears game timer
  if (currentQuestion > questionsObj.length - 1) {
    // if there are no more questioins left
    timer.innerHTML = "Your Score is  " + countDown; // show the users score
    questions.innerHTML = ""; // clear this element
    options.innerHTML = ""; // clear this element
    resultsEl.textContent = "Thanks For Playing"; //add this string to the results element sayin " thank you for playing"
    finalScore.textContent = gameTimer.innerText; // the final score should be the amount of time left on the timer.

    window.localStorage.setItem("gameTimer", gameTimer); //todo set local storage
    highScores();
  }
}

var gameScore = localStorage.getItem("countDown");
var yourName = document.getElementById("your_name");

function highScores() {
  // todo set local storage. onclick event from the  HTML
  var name = yourName.value.trim();
  if (name !== "") {
    var highscore =
      JSON.parse(window.localStorage.getItem("gameTimer.innerText")) || [];

    var playerScore = {
      score: timer,
      initials: yourName,
    };

    highscore.push(playerScore);
    window.localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.href = "highscores.html";
  }
}

console.log(localStorage);
console.log(countDown);
console.log(timer.textContent);
const questionsObj = [
  // questions come from here
  {
    hiphopQuestion: "How many Chainz does TityBoy currently have?",

    hiphopAnswer: ["12", "Too Many", "30", "2"],

    rightAnswer: "2",
  },
  {
    hiphopQuestion:
      "What was the name of the Rap Group Consisting of GLC Really Doe and Kanye West?",

    hiphopAnswer: [
      "Chicago Steppers",
      "Yeezy & the Horseman",
      "The Go-Getters",
      "Gettem Hi",
    ],

    rightAnswer: "The Go-Getters",
  },
  {
    hiphopQuestion: "What is the name of Dr. Dre's first group?",

    hiphopAnswer: [
      "NWA",
      "BlackStreet",
      "World Class Wreckin' Cru ",
      "Soul Assassins",
    ],

    rightAnswer: "World Class Wreckin' Cru ",
  },
  {
    hiphopQuestion:
      "Frayser Boi, Lil Whyte, Indo G, and Chrome were signed to what Label? ",

    hiphopAnswer: ["DTP", "Hypnotize Minds", "CMB", "MMG"],

    rightAnswer: "Hypnotize Minds",
  },
  {
    hiphopQuestion: "Which song won the first Hip Hop Grammy?",

    hiphopAnswer: [
      "Parents Just Don't Understand",
      "Summertime",
      "Supersonic",
      "Wild Wild West",
    ],

    rightAnswer: "Parents Just Don't Understand",
  },
  {
    hiphopQuestion: "Who Was in Paris?",

    hiphopAnswer: ["Kanye", "Jay-Z", "Drake", " I can't say .."],

    rightAnswer: "I can't say ..",
  },
  {
    hiphopQuestion:
      "Which Two Artist are tied for 'Most Grammys won by a Rapper?",

    hiphopAnswer: [
      "Jay-Z & Kanye West",
      "Drake & Lauren Hill",
      "Childish Gambino and Outkast",
      "Michael Jackson & Kanye West",
    ],

    rightAnswer: "Jay-Z & Kanye West",
  },
  {
    hiphopQuestion: " 'Skiddily-be-bop,we rock, a Scooby Doo",

    hiphopAnswer: [
      "and Yabba-dabba America: We love you",
      "and Chicken butt,America We love you",
      "Knuck if you Buck, America: We love you",
      "And guess what, America: We love you",
    ],

    rightAnswer: "And guess what, America: We love you",
  },
  {
    hiphopQuestion: "Who was 'chillin' at the Holidae In'?",

    hiphopAnswer: [
      "Nelly,Murphy Lee, and Ali",
      "Chingy, Snoop , and Ludacris",
      "Deebo,Smokey, and Craig",
      "Amber Rose , Kim Kardashian, and Paris Hilton",
    ],

    rightAnswer: "Chingy, Snoop , and Ludacris",
  },
  {
    hiphopQuestion: "Which Artist has appeared in the most movies?",

    hiphopAnswer: ["Ice Cube", "Ice-T", "Ludacris", "Queen Latifah"],

    rightAnswer: "Ice-T",
  },
  {
    hiphopQuestion: "Who is (lyically)the best Athlete Rapper?",

    hiphopAnswer: [
      "Damien Lillard(Dame Dolla)",
      "Shaquille O'Neal(Shaq Diesel)",
      "Roy Jones Jr",
      "Randall Poffo (Macho Man' Randy Savage)",
    ],

    rightAnswer: "Damien Lillard(Dame Dolla)",
  },
];

//* Its amazing what we are able to do.
//* If you're reading this , just recognize that You are Dope!

//*Thank you for Reading My Code
