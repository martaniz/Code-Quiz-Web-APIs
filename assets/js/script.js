//so we have a button, now lets add the timer.
//timer added from our exercise in week 4
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



//we wil need at least 2 function one to start quoiz and then view score
function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){}

myQuestions.forEach( (currentQuestion, questionNumber) => {
  // the code we want to run for each question goes here
});


buildQuiz();

submitButton.addEventListener('click', showResults);


// i will use const becouse we cannot change constant primitive values, but we can change the properties of constant objects.
const myQuestions = [
  {
    question: "question number one",
    answer:{
      a: "wrong anwser",
      b: "wrong anwser",
      c: "correct anwser"
    },
    correctAnswer: "c"
  },
    {
      question: "question nubmer two",
      anwser: {
        a: "wrong anwser",
        b: "wrong anwser",
        c: "correct anwser"
      },
      correctAnwser: "c"
    },
    {
    question: "question number 3",
    answer: {
      a: "wrong anwser",
      b: "wrong anwser",
      c: "wrong annwser",
      d: "coredt anwser"
    },
    }
];



