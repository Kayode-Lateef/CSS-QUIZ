// Create a Quiz class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

// Create a question Class

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

// Display Question
function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // Show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    


    // Show options
    let choices = quiz.getQuestionIndex().choices;
    choices.sort(() => Math.random() - 0.5);

    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }


    showProgress();
  }
}

// Guess Function
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

// Show Quiz Progress
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// Show Score
function showScores() {
  let quizEndHTML = `
        <h1>Quiz Results</h1>
        <h2 class="score">You Scored:</h2>
        <h2 id="score">${quiz.score}/${quiz.questions.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html"> <i class="fa fa-refresh" aria-hidden="true"></i> Take Quiz Again</a>
        </div>
    `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
}

// Create Quiz Questions
let questions = [
  new Question(
    "If we don't want to allow a floating div to the left side of an element, which css property will we use?",
    ["margin", "clear", "padding", "float"],
    "clear"
  ),
  new Question(
    "What is the correct HTML for referring to an external style sheet?",
    [
      "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;",
      "&lt;style src=&quot;mystyle.css&quot;&gt;",
      "&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;mystyle.css&quot;&gt;",
      " none of these",
    ],
    "&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;mystyle.css&quot;&gt;"
  ),
  new Question(
    "Which of the following defines a measurement in points?",
    ["in", "mm", "pc", "pt"],
    "pt"
  ),
  new Question(
    "Cascading Style sheet stands for?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "If we want to wrap a block of text around an image, which css property will we use ?",
    ["wrap", "push", "float", "align"],
    "float"
  ),
  new Question(
    "Which of the following property is used to control the scrolling of an image in the background?",
    [
      "background-attachment",
      "background",
      "background-repeat",
      "background-position",
    ],
    "background-attachment"
  ),
  new Question(
    "Which of the following property of a anchor element signifies an element on which the user is currently clicking?",
    [":link", ":visited", ":hover", ":active"],
    ":active"
  ),
  new Question(
    "Which of the following property specifies the left padding of an element?",
    ["padding-bottom", "padding-left", "padding-top", "padding-right"],
    "padding-left"
  ),
  new Question(
    "Where in an HTML document is the correct place to refer to an external style sheet?",
    ["At the top of the document", "In the &lt;head&gt; section", "In the &lt;body&gt; section", "At the end of the document"],
    "In the &lt;head&gt; section"
  ),
  new Question(
    "Which attribute can be added to many HTML elements to identify them as a member of a specific group?",
    ["id", "div", "class", "span"],
    "class"
  ),
  new Question(
    "When we write &lt;img src='img.png'&gt;, what does 'img.png' inside the single quote implies?",
    ["element", "attribute", "value", "operator"],
    "value"
  ),
  new Question(
    "How can we write comment along with CSS code ?",
    ["/* a comment */", "// a comment //", "/ a comment /", "&lt;<'a comment'>&gt;"],
    "/* a comment */"
  ),
  new Question(
    "Which css property will you use if you want to add some margin between a DIV's border and its inner text ?",
    ["spacing", "margin", "padding", "inner-margin"],
    "padding"
  ),
  new Question(
    "The CSS property used to specify the transparency of an element is -",
    [
      "Hover",
      "opacity",
      "clearfix",
      "overlay",
    ],
    "opacity"
  ),
  new Question(
    "Which CSS property is used to control the text size of an element ?",
    [
      "font-style",
      "font-size",
      "text-size",
      "text-style",
    ],
    "font-size"
  ),
  new Question(
    "The default value of 'position' attribute is ________.",
    ["fixed", "absolute", "inherit", "relative"],
    "relative"
  ),
  new Question(
    "Which if the following CSS function allows us to perform calculations?",
    ["calc() function", "calculator() function", "calculate() function", "cal() function"],
    "calc() function"
  ),
  new Question(
    "Which of the following is the correct way to add background color in HTML?",
    [
      "&lt;body color = “green”&gt;",
      "&lt;body bg-color = “green”&gt;",
      "&lt;body style = “background-color=green”&gt;",
      "&lt;body style = “background-color: green;”&gt;",
    ],
    "&lt;body style = “background-color: green;”&gt;"
  ),
  new Question(
    "How will you make all paragraph elements 'RED' in color?",
    ["p.all {color: red;}", "p.all {color: #990000;}", "all.p {color: #998877;}", "p {color: red;}"],
    "p {color: red;}"
  ),
  new Question(
    "By default Hyperlinks are displayed with an underline. How do you remove the underline from all hyperlinks by using CSS code?",
    [
      "a {text: no-underline;}",
      "a {text-decoration:none;}",
      "a {text-style: no-underline;}",
      "a {text-decoration: no-underline;}",
    ],
    "a {text-decoration:none;}"
  ),
  new Question(
    "What does the following mean to the computer? div p {color: #ff0000;}",
    [
      "Make text in all divs and all paragraphs in this document be bright red",
      "Make the background in all divs that are of the class 'p' be bright red",
      "Make the text inside any divs inside of any paragraph be bright red",
      "Make the text inside any paragraph that is inside any div be bright red",
    ],
    "Make the text inside any paragraph that is inside any div be bright red"
  ),
  new Question(
    "What are the main differences between ID and Class",
    [
      "Classes are for use with spans and ID's are for use with DIVs",
      "ID's are supposed to be only used once per page but Classes can be used multiple times per page, and one element can have more than one Class but should have only one ID",
      "Classes should be used only once per page, but ID's can be used as many times as you like on one page",
      "ID's are better than Classes",
    ],
    "ID's are supposed to be only used once per page but Classes can be used multiple times per page, and one element can have more than one Class but should have only one ID"
  ),
  new Question(
    "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
    [
      "text-style : capital",
      "transform : capitalize;",
      "text-transform : capital;",
      "text-transform : capitalize;",
    ],
    "text-transform : capitalize;"
  ),
  new Question(
    "How do you select the elements with the class name 'example'?",
    [
      "example",
      "#example",
      ".example",
      "Class example",
    ],
    ".example"
  ),
  new Question(
    "Which of the following is the correct syntax to select all paragraph elements in a div element?",
    ["div p", "p", "div#p", "div ~ p"],
    "div p"
  ),
  new Question(
    "Which language is used to enhance a webpage, e.g. change background colour?",
    ["HTML", "CSS", "JavaScript", "SQL"],
    "CSS"
  ),
  new Question(
    "Which of the following is the correct syntax to select the p siblings of a div element?",
    [
      "div + p",
      "p",
      "div p",
      "div ~ p",
    ],
    "div ~ p"
  ),
  new Question(
    "The CSS property used to draw a line around the elements outside the border?",
    [
      "border",
      "outline",
      "padding",
      "line",
    ],
    "outline"
  ),
  new Question(
    "Which of the following is not a type of combinator?",
    [">", "~", "+", "*"],
    "*"
  ),
  new Question(
    "The CSS property used to set the maximum width of the element's content box is -",
    ["max-width property", "height property", "max-height property", "position property"],
    "max-width property"
  ),
];

questions.sort(() => Math.random() - 0.5);
let quiz = new Quiz(questions);


// Display Questions
displayQuestion();



// Add a count down
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountDown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;
    }
  }, 1000);
}
startCountDown();
