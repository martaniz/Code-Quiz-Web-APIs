// // Creating and using arrays and objects
// // Creating and using functions
// // Using events (eg. load event)
// // Adding user input such as radio buttons
// // Using for loops to repeat code
// // Using if statements to test conditions

// var pos = 0;
// var correct = 0;
// var test, test_status, question, choice, choices, chA, chB, chC;

// // this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
      question: "What is 36 + 42",
      a: "64",
      b: "78",
      c: "76",
      answer: "B"
    },
  {
      question: "What is 7 x 4?",
      a: "21",
      b: "27",
      c: "28",
      answer: "C"
    },
  {
      question: "What is 16 / 4?",
      a: "4",
      b: "6",
      c: "3",
      answer: "A"
    },
  {
      question: "What is 8 x 12?",
      a: "88",
      b: "112",
      c: "96",
      answer: "C"
    }
  ];

//   function get(x){
//     return document.getElementById(x);
//   }

//   // this function renders a question for display on the page
// function renderQuestion(){
//   test = get("test");
//   if(pos >= questions.length){
//     test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
//     get("test_status").innerHTML = "Test completed";
//     // resets the variable to allow users to restart the test
//     pos = 0;
//     correct = 0;
//     // stops rest of renderQuestion function running when test is completed
//     return false;
//   }
//   get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
//   question = questions[pos].question;
//   chA = questions[pos].a;
//   chB = questions[pos].b;
//   chC = questions[pos].c;
//   // display the question
//   test.innerHTML = "<h3>"+question+"</h3>";
//   // display the answer options
//   // the += appends to the data we started on the line above
//   test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
//   test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
//   test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
//   test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
// }

// function checkAnswer(){
//   // use getElementsByName because we have an array which it will loop through
//   choices = document.getElementsByName("choices");
//   for(var i=0; i<choices.length; i++){
//     if(choices[i].checked){
//       choice = choices[i].value;
//     }
//   }
//   // checks if answer matches the correct choice
//   if(choice == questions[pos].answer){
//     //each time there is a correct answer this value increases
//     correct++;
//   }
//   // changes position of which character user is on
//   pos++;
//   // then the renderQuestion function runs again to go to next question
//   renderQuestion();
// }

// // Add event listener to call renderQuestion on page load event
// window.addEventListener("load", renderQuestion);


//

//so we have a button, now lets add the timer.
//timer added from our exercise in week 4
var questionNum = 0;
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('save-task');
var answerA = document.getElementById("a")
var question = document.getElementById("question")
var questionBlock = document.getElementById("questions")

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
    document.getElementById("b").textContent = questions[questionNum].b
    document.getElementById("c").textContent = questions[questionNum].c
    answerA.onclick = checkAnswer

  }
}

function checkAnswer(){
  console.log("answer was checked")
  questionNum++
  renderQuestions()
}
function endQuiz(){
  questionBlock.style.visibility="hidden"
  console.log("quize has ended");
  }


// another function that evaluates the question number
// check if questionNum is > the number of questions if it is then end the quiz

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

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



