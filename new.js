// let startButton = document.querySelector("#start_game_button");
// let gameTimer = document.querySelector("timer");
// let answersButton = document.querySelector("answers");
// let renderResult = document.querySelector("results");
var resultsEl = document.getElementById("#results");

function startGame() {
  //  startGame with a button click{
  showTimer();
  showQuestion();
  console.log("clicked");
}

// showTimer();
// showQuestion();
// console.log("clicked")

var countDown = 120;

function showTimer() {
  var timer = document.querySelector("#timer");
  setInterval(function () {
    countDown--;
    timer.textContent = countDown;
  }, 1000);
}
var questions = document.getElementById("#questions");
var choices = document.getElementById("#answers");
function showQuestions() {
questions.innerText = questionsObj[0].hiphopQuestion; //adds questions to the page
  
  choices.innerText = questionsObj[0].hiphopAnswer;
  for (let i = 0; i < questionsObj[0].hiphopAnswer.length; i++) {

  }
}

// showQuestion and startTimer

// function showTimer(){
// //  showTimer

// };

// function showQuestion(){
// // showQuestion(){
//     // render question to the page --DOM traversal/add to page
//         //showAnswers
//              //rightAnswer,
//                 //nextQuestion +3 seconds on showTimer
//             //wrongAnswer,
//                 //nextQuestion - 10 seconds on showTimer
//     //}
// //};
// }

// function nextQuestion(){

// };

// function gameOver(){
//stopTimer
//showHighScore
// addInitials
// orderScore
// };

// // gameOver
//   // if showTimer reaches 0 || all showQuestions have been answered gameOver/end game
// // at gameOver showHighScore
//     // add initials to highScorePage

// function showHighScore(){

// };

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
