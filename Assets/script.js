// Todo create template literal for the html question pages.

// var for bgimage
// const bodyBackground = document.getElementsByTagName("body")

//* Don't Dwell on Dreams and forget to live.

var currentScore;

var finalScore = document.querySelector("#endscore");

var enterScore = document.querySelector("#scorecard");

// var countDown = new Date("Jul 30, 2022 22:34:30").getTime()

// questions below
// each question has four options.
// each question will be built as an object to pull from
// each question is built from  random moment in hip hop history-12 questions
const questionsObj = [
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
console.log(questionsObj);
// this section will create the timer and append it tho the page when the quiz starts.
//    timer requires a conditional for correct and incorrect answers

// initials need to be saved to highscores.js

// variables/class names to append to
// quiz_box.....Hello.....list.....questions.....div_button.....button

// I need a timer
// the timer needs to count down
// the count down starts at 120 -0

//  i need to show time on the quiz.

// *"I Love you, I hope you Love you too"÷///
// -----------------------------------------------------------//

var timer = document.querySelector("#timer");
var regression; // undefined variable to be declared later.
var counterOnPage = 120; //value = int
var timeLeft; // undefined to be assigned a value later
var correctAnswer = questionsObj.hiphopQuestion;

// starts quiz and timer
const startButton = function () {
  //naming the function
  // this sets the interval
  regression = setInterval(function () {
    counterOnPage--;
    timer.textContent = counterOnPage;

    if (counterOnPage < 0) {
      clearInterval(regression);
      alert("Times Up");
      location.reload();
    } else if (correctAnswer == true) {
      counterOnPage + 3;
      console.log("Dope!");
    }
  }, 1000);
};

// startButton();  //uncomment this function when ready to deploy

console.log(startButton);

// ------------------------------------------------//
//* Its amazing what we are able to do
//* Recognize that You are Dope!

// stop timer function
const endGame = function () {
  clearInterval(regression);
  currentScore = counterOnPage;
};

// ------------------------------------------------//
let presentQuestion = 0;
let selection = "";
let options = document.getElementById("answers");
let questions = document.getElementById("questions");
let results = document.getElementById("results");

// todo add functionality to display the questions and print js

const displayQuestion = function () {
  questions.textContent = questionsObj[presentQuestion].hiphopQuestion;

  for (i = 0; i < questionsObj[presentQuestion].hiphopQuestion.length; i++)
    var choices = document.createElement("button");
  choices.innerHTML = questionsObj[presentQuestion].hiphopAnswer[i];
  options.appendChild(choices);

  choices.addEventListener("click", function () {
    selection = this.textContent;

    if (selection === questionsObj[presentQuestion].rightAnswer) {
      results.textContent = "Word!";
      results.className = "yes-word";
      nextQuestion(); // add Class name and CSS styling
    } else {
      results.textContent = "Naaahh Fam!";
      results.className = "nah-wrong";
      nextQuestion();
    }
  });
};
// ---------------------------------------------------------------------------------
const nextQuestion = function () {
  questions++;
  if (questions < questionsObj && counterOnPage > 0) {
    displayQuestion();
  } else if (question > questionsObj.length) {
    stopGame();
  }
};

const stopGame = function () {};

//* Love YOUR Life, and Love Yourself while you live it...

//*Thank you for Reading My Code
