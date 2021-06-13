

//so we have a button, now lets add the timer.
//timer added from our exercise in week 4
var questions = [
  {
      question: " Which of the following is not JavaScript Data Types?",
      a: "Number",
      b: "Float",
      c: "Undefined",
      answer: "B"
    },
  {
      question: "Which company developed JavaScript?",
      a: "IBM",
      b: "Bell Labs",
      c: "Netscape",
      answer: "C"
    },
  {
      question: "Inside which HTML element do we put the JavaScript?",
      a: "<script>",
      b: "<head>",
      c: "<style>",
      answer: "A"
    },
  {
      question: " Which of the following is correct about features of JavaScript?",
      a: "It can not Handling dates and time.",
      b: "JavaScript is not interpreter based scripting language.",
      c: "JavaScript is a object-based scripting language.",
      answer: "C"
    }
  ];
var questionNum = 0;
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('save-task');
var answerA = document.getElementById("a")
var answerB = document.getElementById("b")
var answerC = document.getElementById("c")
var question = document.getElementById("question")
var questionBlock = document.getElementById("questions")
var score = 0
var timeLeft = 0


var message =
  'Game Over';
var words = message.split(' ');

function startQuiz() {
  document.getElementById("save-task").style.visibility ="hidden";
  questionBlock.style.visibility="visible"
  countdown();
  renderQuestions();
  // make whatever text disappear
  // start timer
  // render the first question and answers in the question div
}

function renderQuestions() {
  if (questionNum >3) {
    endQuiz();
  } else {
console.log(questions[questionNum])

    document.getElementById("question").textContent = questions[questionNum].question
    answerA.textContent = questions[questionNum].a
    answerB.textContent = questions[questionNum].b
    answerC.textContent = questions[questionNum].c
    questions[questionNum].answer
    
    answerA.onclick = checkAnswer
    answerB.onclick = checkAnswer
    answerC.onclick = checkAnswer
  }
}

function checkAnswer(){
  console.log("answer was checked")
  console.log(this.id)
  if (this.id === questions[questionNum].answer.toLowerCase()) {
    console.log("answer is correct")
    score += 10;
  } else {
timeLeft -= 10
  }
  

  questionNum++
  renderQuestions()
}


function endQuiz(){
  questionBlock.style.visibility="hidden"
  document.getElementById("hight-score").style.visibility ="visible";

  console.log("quize has ended");
  }


// another function that evaluates the question number
// check if questionNum is > the number of questions if it is then end the quiz

// Timer that counts down from 5
function countdown() {
  timeLeft = 500;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
      endQuiz();
    }
  }, 1000);
}
// highScore = {
//   initials: initials,
//   score: score
// }

// highScoreList = localStorage.getItem(highScore)
// highScoreList.push(highScore)
// localStorage.setItem(highScoreList)

// Displays the message one word at a time
function displayMessage() {
    var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}








startBtn.onclick = startQuiz;



