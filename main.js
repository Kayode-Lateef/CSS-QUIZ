// ==========================================
// CSS DEVELOPMENT QUIZ
// ==========================================

const QUESTIONS_PER_CATEGORY = 5;
const QUIZ_TIME = 20;


// ==========================================
// QUESTION CLASS
// ==========================================

class Question {

    constructor(
        text,
        choices,
        answer,
        explanation = ""
    ) {

        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.explanation = explanation;
    }


    isCorrectAnswer(choice) {

        return choice === this.answer;
    }
}


// ==========================================
// QUIZ CLASS
// ==========================================

class Quiz {

    constructor(questions) {

        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
        this.userAnswers = [];
    }


    getCurrentQuestion() {

        return this.questions[
            this.questionIndex
        ];
    }


    submitAnswer(answer) {

        const question =
            this.getCurrentQuestion();


        const isCorrect =
            question.isCorrectAnswer(answer);


        if (isCorrect) {

            this.score++;
        }


        this.userAnswers.push({

            question:
                question.text,

            selectedAnswer:
                answer,

            correctAnswer:
                question.answer,

            explanation:
                question.explanation,

            isCorrect:
                isCorrect

        });


        this.questionIndex++;
    }


    hasEnded() {

        return (
            this.questionIndex >=
            this.questions.length
        );
    }
}


// ==========================================
// SHUFFLE ARRAY
// ==========================================

function shuffleArray(array) {

    const shuffled = [...array];


    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            shuffled[i],
            shuffled[randomIndex]

        ] = [

            shuffled[randomIndex],
            shuffled[i]

        ];
    }


    return shuffled;
}


// ==========================================
// SHUFFLE ANSWER POSITIONS
// ==========================================

function shuffleQuestionChoices(question) {

    return new Question(

        question.text,

        shuffleArray(
            question.choices
        ),

        question.answer,

        question.explanation
    );
}


// ==========================================
// CATEGORY 1
// CSS FUNDAMENTALS & SELECTORS
// 15 QUESTIONS
// ==========================================

const fundamentalsQuestions = [

    new Question(
        "What does CSS stand for?",
        [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
            "Cascading Syntax System"
        ],
        "Cascading Style Sheets",
        "CSS stands for Cascading Style Sheets. It is used to control the presentation and layout of documents such as HTML pages."
    ),


    new Question(
        "Which HTML element is normally used to link an external CSS file to a page?",
        [
            "<link>",
            "<style>",
            "<css>",
            "<script>"
        ],
        "<link>",
        "An external stylesheet is normally connected using a <link> element inside the document's <head>."
    ),


    new Question(
        `Which declaration correctly sets paragraph text to red?`,
        [
            "color: red;",
            "text-color: red;",
            "font-color: red;",
            "foreground: red;"
        ],
        "color: red;",
        "The color property controls the foreground color of text."
    ),


    new Question(
        "Which selector targets all <p> elements?",
        [
            "p",
            ".p",
            "#p",
            "*p"
        ],
        "p",
        "An element or type selector uses the element name directly, so p selects all <p> elements."
    ),


    new Question(
        `Which selector targets an element with class="card"?`,
        [
            ".card",
            "#card",
            "card",
            "*card"
        ],
        ".card",
        "A class selector begins with a period, so .card targets elements whose class list contains card."
    ),


    new Question(
        `Which selector targets an element with id="header"?`,
        [
            "#header",
            ".header",
            "header#",
            "id(header)"
        ],
        "#header",
        "An ID selector begins with #, so #header targets the element whose id is header."
    ),


    new Question(
        "Which selector matches every element?",
        [
            "*",
            "all",
            "html",
            ".all"
        ],
        "*",
        "The universal selector * matches elements regardless of their type."
    ),


    new Question(
        `What does this selector target?

nav a {
    color: white;
}`,
        [
            "All <a> elements that are descendants of <nav>",
            "Only <nav> elements with an a class",
            "Every <nav> and every <a> element",
            "Only <a> elements directly after <nav>"
        ],
        "All <a> elements that are descendants of <nav>",
        "A space between selectors is the descendant combinator. nav a matches <a> elements located anywhere inside a <nav>."
    ),


    new Question(
        `What does this selector target?

.menu > li`,
        [
            "<li> elements that are direct children of .menu",
            "Every descendant inside .menu",
            "The first <li> inside .menu only",
            ".menu elements inside <li>"
        ],
        "<li> elements that are direct children of .menu",
        "The > child combinator matches elements that are immediate children of the element on its left."
    ),


    new Question(
        "Which pseudo-class is commonly used to style a link when the pointer is over it?",
        [
            ":hover",
            "::hover",
            ":mouse",
            ":active-link"
        ],
        ":hover",
        ":hover matches an element while a pointing device is positioned over it."
    ),


    new Question(
        "Which pseudo-class can select the first child among a group of sibling elements?",
        [
            ":first-child",
            "::first",
            ":child-first",
            ":first"
        ],
        ":first-child",
        ":first-child matches an element when it is the first child of its parent."
    ),


    new Question(
        "Which pseudo-element can insert generated content before an element's content?",
        [
            "::before",
            ":before-child",
            "::prepend",
            ":insert"
        ],
        "::before",
        "::before creates a generated pseudo-element as the first child of the selected element."
    ),


    new Question(
        "Which of these selectors generally has the highest specificity?",
        [
            "#navigation",
            ".navigation",
            "nav",
            "*"
        ],
        "#navigation",
        "An ID selector has greater specificity than class selectors, type selectors and the universal selector."
    ),


    new Question(
        `Given:

p {
    color: blue;
}

p {
    color: red;
}

What color will a normal paragraph use if no other rule overrides these declarations?`,
        [
            "Red",
            "Blue",
            "Black",
            "Both red and blue"
        ],
        "Red",
        "The selectors have equal specificity, so the later declaration wins in the cascade."
    ),


    new Question(
        "What is the initial value of the CSS position property?",
        [
            "static",
            "relative",
            "absolute",
            "fixed"
        ],
        "static",
        "The initial value of position is static. A statically positioned element follows the normal document flow."
    )

];


// ==========================================
// CATEGORY 2
// BOX MODEL, UNITS & TYPOGRAPHY
// 15 QUESTIONS
// ==========================================

const boxModelQuestions = [

    new Question(
        "Which part of the CSS box model creates space between an element's content and its border?",
        [
            "padding",
            "margin",
            "outline",
            "gap"
        ],
        "padding",
        "Padding creates space between the content box and the element's border."
    ),


    new Question(
        "Which property creates space outside an element's border?",
        [
            "margin",
            "padding",
            "spacing",
            "gap"
        ],
        "margin",
        "Margin creates space outside the border of an element."
    ),


    new Question(
        "Which property controls the thickness of an element's border?",
        [
            "border-width",
            "border-size",
            "border-thickness",
            "outline-width"
        ],
        "border-width",
        "border-width controls the thickness of an element's border."
    ),


    new Question(
        `What does this declaration do?

box-sizing: border-box;`,
        [
            "Includes padding and border within the specified width and height",
            "Removes the border from the element",
            "Makes every element a flex container",
            "Adds a box shadow around the border"
        ],
        "Includes padding and border within the specified width and height",
        "With border-box, the declared width and height include the content, padding and border areas."
    ),


    new Question(
        `An element has:

width: 200px;
padding: 20px;
border: 5px solid;
box-sizing: content-box;

Ignoring margin, what is its total rendered width?`,
        [
            "250px",
            "200px",
            "225px",
            "240px"
        ],
        "250px",
        "With content-box, 20px padding and 5px border are added on both sides: 200 + 40 + 10 = 250px."
    ),


    new Question(
        `An element has:

width: 200px;
padding: 20px;
border: 5px solid;
box-sizing: border-box;

What is its total border-box width?`,
        [
            "200px",
            "250px",
            "240px",
            "210px"
        ],
        "200px",
        "With border-box, padding and border are included inside the specified 200px width."
    ),


    new Question(
        "Which CSS unit is relative to the root element's font size?",
        [
            "rem",
            "em",
            "px",
            "vh"
        ],
        "rem",
        "The rem unit is relative to the font size of the document's root element."
    ),


    new Question(
        "Which CSS unit is commonly relative to the font size of the element itself, although font-size itself resolves em against the parent's computed font size?",
        [
            "em",
            "rem",
            "vw",
            "px"
        ],
        "em",
        "The em unit is font-relative. For most properties it relates to the element's font size; when used on font-size, it resolves relative to the parent's font size."
    ),


    new Question(
        "Which unit represents 1% of the viewport width?",
        [
            "vw",
            "vh",
            "rem",
            "vmin"
        ],
        "vw",
        "1vw represents one percent of the viewport's width."
    ),


    new Question(
        "Which property changes the size of text?",
        [
            "font-size",
            "text-size",
            "font-height",
            "size"
        ],
        "font-size",
        "The font-size property controls the size of text."
    ),


    new Question(
        "Which property controls the space between lines of text?",
        [
            "line-height",
            "line-spacing",
            "letter-spacing",
            "text-height"
        ],
        "line-height",
        "line-height controls the height of each line box and therefore affects vertical spacing between lines."
    ),


    new Question(
        "Which property controls spacing between text characters?",
        [
            "letter-spacing",
            "word-spacing",
            "font-spacing",
            "character-gap"
        ],
        "letter-spacing",
        "letter-spacing adjusts the spacing between text characters."
    ),


    new Question(
        `What does this declaration normally do?

font-weight: 700;`,
        [
            "Uses a bold font weight when that weight is available",
            "Sets the text size to 700px",
            "Sets line-height to 700",
            "Creates 700 pixels of letter spacing"
        ],
        "Uses a bold font weight when that weight is available",
        "Numeric font weights commonly range from 100 to 900. A value of 700 conventionally corresponds to bold."
    ),


    new Question(
        "Which property is used to horizontally align inline content such as text within a block container?",
        [
            "text-align",
            "align-text",
            "horizontal-align",
            "font-align"
        ],
        "text-align",
        "text-align controls the inline alignment of text and other inline-level content within a block container."
    ),


    new Question(
        `What does this declaration do?

margin: 10px 20px;`,
        [
            "Sets top/bottom to 10px and left/right to 20px",
            "Sets top/left to 10px and bottom/right to 20px",
            "Sets every margin to 20px",
            "Sets every margin to 10px"
        ],
        "Sets top/bottom to 10px and left/right to 20px",
        "With two margin values, the first applies vertically and the second applies horizontally."
    )

];


// ==========================================
// CATEGORY 3
// LAYOUT & RESPONSIVE CSS
// 15 QUESTIONS
// ==========================================

const layoutQuestions = [

    new Question(
        `Which declaration turns an element into a flex container?`,
        [
            "display: flex;",
            "position: flex;",
            "flex: display;",
            "layout: flex;"
        ],
        "display: flex;",
        "Setting display to flex creates a flex formatting context for the element's children."
    ),


    new Question(
        `In a flex container with the default flex-direction, which property controls alignment along the main horizontal axis?`,
        [
            "justify-content",
            "align-items",
            "text-align",
            "align-content"
        ],
        "justify-content",
        "With the default flex-direction: row, the main axis is horizontal and justify-content distributes items along that axis."
    ),


    new Question(
        `In a flex container with flex-direction: row, which property commonly aligns items along the vertical cross axis?`,
        [
            "align-items",
            "justify-content",
            "text-align",
            "justify-items"
        ],
        "align-items",
        "For a row flex container, the cross axis is vertical and align-items controls alignment of items along it."
    ),


    new Question(
        `What does this declaration do?

flex-direction: column;`,
        [
            "Makes the main flex axis vertical",
            "Creates CSS Grid columns",
            "Forces every item onto one horizontal row",
            "Changes the text writing direction"
        ],
        "Makes the main flex axis vertical",
        "flex-direction: column changes the flex container's main axis so items are laid out vertically."
    ),


    new Question(
        `Which declaration allows flex items to move onto additional lines when there is not enough room?`,
        [
            "flex-wrap: wrap;",
            "flex-flow: new-line;",
            "wrap: flex;",
            "overflow: wrap;"
        ],
        "flex-wrap: wrap;",
        "flex-wrap: wrap allows flex items to break onto additional flex lines."
    ),


    new Question(
        "Which declaration creates a grid container?",
        [
            "display: grid;",
            "position: grid;",
            "grid: display;",
            "layout: grid;"
        ],
        "display: grid;",
        "display: grid creates a grid formatting context for the element's children."
    ),


    new Question(
        `What does this create?

grid-template-columns: repeat(3, 1fr);`,
        [
            "Three equal grid columns",
            "Three equal grid rows",
            "One column divided into three vertical sections",
            "A flex container with three items"
        ],
        "Three equal grid columns",
        "repeat(3, 1fr) defines three columns, each receiving one equal fraction of the available grid space."
    ),


    new Question(
        `What does the CSS gap property commonly control in Grid and Flexbox layouts?`,
        [
            "Spacing between rows and columns or flex items",
            "Space outside the entire container",
            "The thickness of borders",
            "The width of every child"
        ],
        "Spacing between rows and columns or flex items",
        "gap provides gutters between grid tracks and between flex items without requiring margins on individual items."
    ),


    new Question(
        `What does position: relative normally do by itself when no inset values such as top or left are supplied?`,
        [
            "Keeps the element in normal flow while establishing it as a positioned element",
            "Removes the element from normal flow",
            "Fixes the element to the viewport",
            "Hides the element"
        ],
        "Keeps the element in normal flow while establishing it as a positioned element",
        "A relatively positioned element remains in normal flow. It can also serve as the containing block for certain absolutely positioned descendants."
    ),


    new Question(
        `An element uses:

position: absolute;

What is generally true about it?`,
        [
            "It is removed from normal document flow",
            "It always stays fixed to the viewport",
            "It behaves exactly like position: static",
            "It automatically becomes a grid container"
        ],
        "It is removed from normal document flow",
        "Absolutely positioned elements are taken out of normal flow and positioned relative to their containing block."
    ),


    new Question(
        `Which positioning value is commonly used when an element should remain attached to the viewport while the page scrolls?`,
        [
            "fixed",
            "relative",
            "static",
            "absolute"
        ],
        "fixed",
        "A fixed-positioned element is generally positioned relative to the viewport and does not move with normal page scrolling."
    ),


    new Question(
        "What is the main purpose of a CSS media query?",
        [
            "Apply styles conditionally based on media or device characteristics",
            "Import JavaScript into CSS",
            "Create HTML elements",
            "Store browser data"
        ],
        "Apply styles conditionally based on media or device characteristics",
        "Media queries allow styles to apply only when specified conditions, such as viewport width, are satisfied."
    ),


    new Question(
        `What does this media query target?

@media (max-width: 768px) {
    ...
}`,
        [
            "Viewports 768px wide or narrower",
            "Viewports wider than 768px only",
            "Exactly 768px and no other width",
            "Screens at least 768px tall"
        ],
        "Viewports 768px wide or narrower",
        "max-width: 768px matches when the viewport width is no greater than 768px."
    ),


    new Question(
        `Which declaration is commonly useful for preventing an image from overflowing a responsive container while preserving its aspect ratio when paired with an automatic height?`,
        [
            "max-width: 100%;",
            "width: 100vw;",
            "min-width: 100%;",
            "overflow: image;"
        ],
        "max-width: 100%;",
        "max-width: 100% prevents the image from becoming wider than its containing block. It is commonly paired with height: auto for responsive images."
    ),


    new Question(
        `Which Grid declaration is commonly used to create responsive columns that automatically fit as many tracks as possible?

grid-template-columns: ______;`,
        [
            "repeat(auto-fit, minmax(200px, 1fr))",
            "flex-wrap: wrap",
            "columns: auto 200px",
            "grid: responsive"
        ],
        "repeat(auto-fit, minmax(200px, 1fr))",
        "Combining repeat(), auto-fit and minmax() allows Grid to create as many columns as fit while respecting a minimum track size."
    )

];


// ==========================================
// CATEGORY 4
// PRACTICAL CSS & DEBUGGING
// 15 QUESTIONS
// ==========================================

const practicalQuestions = [

    new Question(
        `A developer writes:

.title {
    text-color: red;
}

The text color does not change.

What should replace text-color?`,
        [
            "color",
            "font-color",
            "foreground",
            "text-style"
        ],
        "color",
        "CSS uses the color property to control the foreground color of text."
    ),


    new Question(
        `The HTML is:

<h2 class="title">Welcome</h2>

The CSS is:

#title {
    color: green;
}

Why is the rule not targeting this heading?`,
        [
            "The CSS uses an ID selector but the HTML has a class",
            "h2 elements cannot have classes",
            "color cannot be applied to headings",
            "The class must be placed on a div"
        ],
        "The CSS uses an ID selector but the HTML has a class",
        "#title targets id=\"title\". Since the HTML uses class=\"title\", the selector should use .title."
    ),


    new Question(
        `The HTML is:

<div id="hero">Welcome</div>

Which selector correctly targets it?`,
        [
            "#hero",
            ".hero",
            "hero",
            "*hero"
        ],
        "#hero",
        "An element with id=\"hero\" is targeted with the ID selector #hero."
    ),


    new Question(
        `A developer wants this card to have 20px of space inside its border:

.card {
    ______: 20px;
}

Which property belongs in the blank?`,
        [
            "padding",
            "margin",
            "gap",
            "outline"
        ],
        "padding",
        "Padding creates internal space between the content and the border."
    ),


    new Question(
        `A developer wants 30px of space outside a card:

.card {
    ______: 30px;
}

Which property should be used?`,
        [
            "margin",
            "padding",
            "line-height",
            "border-spacing"
        ],
        "margin",
        "Margin creates space outside an element's border."
    ),


    new Question(
        `A developer writes:

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

Assuming the container has enough width and height and uses the default flex direction, what is the result?`,
        [
            "The flex items are centered horizontally and vertically",
            "The container becomes a three-column grid",
            "Only the text is centered horizontally",
            "The items are positioned absolutely"
        ],
        "The flex items are centered horizontally and vertically",
        "With flex-direction: row, justify-content centers along the horizontal main axis and align-items centers along the vertical cross axis."
    ),


    new Question(
        `A developer writes:

.container {
    display: flex;
    justify-content: center;
}

but wants the items stacked vertically instead of horizontally.

Which declaration should be added?`,
        [
            "flex-direction: column;",
            "display: block;",
            "justify-content: vertical;",
            "align-items: column;"
        ],
        "flex-direction: column;",
        "flex-direction: column changes the flex main axis so the items are arranged vertically."
    ),


    new Question(
        `A developer writes:

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

How many explicit columns are created?`,
        [
            "3",
            "1",
            "2",
            "6"
        ],
        "3",
        "Each 1fr value defines one grid track, so the declaration creates three equal columns."
    ),


    new Question(
        `A navigation menu overflows on a small screen.

The developer wants its flex items to continue onto another line when necessary.

Which declaration should be added?`,
        [
            "flex-wrap: wrap;",
            "overflow: new-line;",
            "display: multiline;",
            "flex-break: line;"
        ],
        "flex-wrap: wrap;",
        "flex-wrap: wrap permits flex items to move onto additional flex lines when they cannot fit on one line."
    ),


    new Question(
        `A developer writes:

.card {
    width: 300px;
    padding: 20px;
}

The card becomes wider than expected because padding is added to the width.

Which declaration can make the declared width include the padding?`,
        [
            "box-sizing: border-box;",
            "box-sizing: padding-box;",
            "width: auto-box;",
            "overflow: border;"
        ],
        "box-sizing: border-box;",
        "border-box includes padding and border inside the declared width and height."
    ),


    new Question(
        `A developer wants a button's background to change when the mouse pointer is over it.

Which selector is appropriate?`,
        [
            ".button:hover",
            ".button::mouse",
            ".button:click",
            ".button:hovered"
        ],
        ".button:hover",
        "The :hover pseudo-class matches the button while a pointing device is over it."
    ),


    new Question(
        `A developer writes:

.hero {
    background-image: "hero.jpg";
}

The background does not appear.

Which version is correct?`,
        [
            "background-image: url(\"hero.jpg\");",
            "background-image: src(\"hero.jpg\");",
            "background-image: image(\"hero.jpg\");",
            "background-image: href(\"hero.jpg\");"
        ],
        "background-image: url(\"hero.jpg\");",
        "CSS image resources used by background-image are referenced with the url() function."
    ),


    new Question(
        `A developer has:

.card {
    position: absolute;
    top: 20px;
    left: 20px;
}

They want .card to be positioned relative to its parent container rather than an unrelated ancestor or the initial containing block.

What is commonly added to the parent?`,
        [
            "position: relative;",
            "display: absolute;",
            "position: static;",
            "float: relative;"
        ],
        "position: relative;",
        "A non-static positioned parent, commonly position: relative, can establish the containing block used by an absolutely positioned child."
    ),


    new Question(
        `A developer writes:

@media (min-width: 768px) {
    .menu {
        display: none;
    }
}

They intended to hide the menu only on screens smaller than or equal to 768px.

What should be changed?`,
        [
            "Change min-width to max-width",
            "Change display: none to visibility: flex",
            "Change 768px to 768rem",
            "Remove @media"
        ],
        "Change min-width to max-width",
        "min-width targets widths at or above the breakpoint. max-width targets widths at or below it."
    ),


    new Question(
        `Given:

p {
    color: blue;
}

.message {
    color: green;
}

#notice {
    color: red;
}

And:

<p id="notice" class="message">
    Important
</p>

Which color will the text use, assuming there are no other competing declarations?`,
        [
            "Red",
            "Green",
            "Blue",
            "The browser default"
        ],
        "Red",
        "#notice has greater specificity than the class selector .message and the type selector p, so its red declaration wins."
    )

];


// ==========================================
// CREATE BALANCED QUIZ
// ==========================================

function selectRandomQuestions(
    questionPool,
    amount
) {

    return shuffleArray(
        questionPool
    ).slice(
        0,
        amount
    );
}


function createQuiz() {

    const selectedQuestions = [

        ...selectRandomQuestions(
            fundamentalsQuestions,
            QUESTIONS_PER_CATEGORY
        ),

        ...selectRandomQuestions(
            boxModelQuestions,
            QUESTIONS_PER_CATEGORY
        ),

        ...selectRandomQuestions(
            layoutQuestions,
            QUESTIONS_PER_CATEGORY
        ),

        ...selectRandomQuestions(
            practicalQuestions,
            QUESTIONS_PER_CATEGORY
        )

    ];


    const randomizedQuestions =
        shuffleArray(
            selectedQuestions
        ).map(
            shuffleQuestionChoices
        );


    return new Quiz(
        randomizedQuestions
    );
}


// ==========================================
// QUIZ STATE
// ==========================================

let quiz =
    createQuiz();


let selectedAnswer =
    null;


let quizFinished =
    false;


// ==========================================
// DISPLAY QUESTION
// ==========================================

function displayQuestion() {

    if (quiz.hasEnded()) {

        showScore();

        return;
    }


    selectedAnswer = null;


    const currentQuestion =
        quiz.getCurrentQuestion();


    const questionElement =
        document.getElementById(
            "question"
        );


    questionElement.textContent =
        currentQuestion.text;


    currentQuestion.choices.forEach(
        (choice, index) => {

            const choiceElement =
                document.getElementById(
                    "choice" + index
                );


            const button =
                document.getElementById(
                    "btn" + index
                );


            choiceElement.textContent =
                choice;


            button.classList.remove(
                "selected"
            );


            button.disabled =
                false;


            button.onclick =
                function () {

                    selectAnswer(
                        choice,
                        index
                    );
                };
        }
    );


    const nextButton =
        document.getElementById(
            "next-btn"
        );


    nextButton.disabled =
        true;


    nextButton.textContent =
        quiz.questionIndex ===
        quiz.questions.length - 1

            ? "Submit Quiz"

            : "Next Question";


    const message =
        document.getElementById(
            "selection-message"
        );


    message.textContent =
        "Select an answer to continue.";


    updateProgress();
}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(
    choice,
    selectedIndex
) {

    selectedAnswer =
        choice;


    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const button =
            document.getElementById(
                "btn" + i
            );


        button.classList.remove(
            "selected"
        );
    }


    const selectedButton =
        document.getElementById(
            "btn" + selectedIndex
        );


    selectedButton.classList.add(
        "selected"
    );


    const nextButton =
        document.getElementById(
            "next-btn"
        );


    nextButton.disabled =
        false;


    const message =
        document.getElementById(
            "selection-message"
        );


    message.textContent =
        "Answer selected.";
}


// ==========================================
// NEXT QUESTION
// ==========================================

function goToNextQuestion() {

    if (
        selectedAnswer === null
    ) {

        return;
    }


    quiz.submitAnswer(
        selectedAnswer
    );


    if (quiz.hasEnded()) {

        showScore();

        return;
    }


    displayQuestion();
}


// ==========================================
// NEXT BUTTON EVENT
// ==========================================

document
    .getElementById(
        "next-btn"
    )
    .addEventListener(
        "click",
        goToNextQuestion
    );


// ==========================================
// UPDATE PROGRESS
// ==========================================

function updateProgress() {

    const currentQuestionNumber =
        quiz.questionIndex + 1;


    const progress =
        document.getElementById(
            "progress"
        );


    progress.textContent =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}


// ==========================================
// PERFORMANCE MESSAGE
// ==========================================

function getPerformanceMessage(
    percentage
) {

    if (percentage >= 90) {

        return "Excellent Work!";
    }


    if (percentage >= 75) {

        return "Great Work!";
    }


    if (percentage >= 60) {

        return "Good Effort!";
    }


    if (percentage >= 50) {

        return "Keep Practising!";
    }


    return "More Practice Needed";
}


// ==========================================
// SHOW SCORE
// ==========================================

function showScore() {

    if (quizFinished) {

        return;
    }


    quizFinished =
        true;


    stopTimer();


    const quizElement =
        document.getElementById(
            "quiz"
        );


    const totalQuestions =
        quiz.questions.length;


    const answeredQuestions =
        quiz.userAnswers.length;


    const incorrectAnswers =
        answeredQuestions -
        quiz.score;


    const unansweredQuestions =
        totalQuestions -
        answeredQuestions;


    const percentage =
        Math.round(
            (
                quiz.score /
                totalQuestions
            ) * 100
        );


    const message =
        getPerformanceMessage(
            percentage
        );


    quizElement.innerHTML = `

        <div class="result-container">

            <p class="result-label">
                Assessment Complete
            </p>


            <h1>
                Quiz Completed
            </h1>


            <p class="result-message">
                ${message}
            </p>


            <div class="score-circle">

                <span class="score-number">
                    ${quiz.score}/${totalQuestions}
                </span>


                <span class="score-percentage">
                    ${percentage}%
                </span>

            </div>


            <div class="result-details">


                <div
                    class="result-item correct-result"
                >

                    <span>
                        Correct
                    </span>

                    <strong>
                        ${quiz.score}
                    </strong>

                </div>


                <div
                    class="result-item incorrect-result"
                >

                    <span>
                        Incorrect
                    </span>

                    <strong>
                        ${incorrectAnswers}
                    </strong>

                </div>


                <div class="result-item">

                    <span>
                        Unanswered
                    </span>

                    <strong>
                        ${unansweredQuestions}
                    </strong>

                </div>


            </div>


            <div class="result-actions">

                <button
                    type="button"
                    class="review-btn"
                    onclick="showReview()"
                >
                    Review Answers
                </button>


                <button
                    type="button"
                    class="restart-btn"
                    onclick="restartQuiz()"
                >
                    Take Quiz Again
                </button>

            </div>

        </div>
    `;
}


// ==========================================
// REVIEW ANSWERS
// ==========================================

function showReview() {

    const quizElement =
        document.getElementById(
            "quiz"
        );


    let reviewHTML = `

        <div class="review-container">


            <div class="review-header">

                <p class="result-label">
                    Assessment Review
                </p>


                <h1>
                    Review Your Answers
                </h1>


                <p>
                    Study each explanation before
                    attempting the assessment again.
                </p>

            </div>


            <div class="review-list">

    `;


    quiz.questions.forEach(
        (question, index) => {

            const answer =
                quiz.userAnswers[
                    index
                ];


            // ==================================
            // UNANSWERED QUESTION
            // ==================================

            if (!answer) {

                reviewHTML += `

                    <article
                        class="
                            review-card
                            unanswered-card
                        "
                    >

                        <div
                            class="review-card-top"
                        >

                            <div
                                class="
                                    review-question-number
                                "
                            >
                                Question ${index + 1}
                            </div>


                            <span
                                class="
                                    review-status
                                    unanswered-status
                                "
                            >
                                Unanswered
                            </span>

                        </div>


                        <h2>

                            ${escapeHTML(
                                question.text
                            )}

                        </h2>


                        <div
                            class="answer-review-row"
                        >

                            <span
                                class="review-label"
                            >
                                Your Answer
                            </span>


                            <p
                                class="unanswered-text"
                            >
                                Not answered
                            </p>

                        </div>


                        <div
                            class="answer-review-row"
                        >

                            <span
                                class="review-label"
                            >
                                Correct Answer
                            </span>


                            <p
                                class="
                                    correct-answer-text
                                "
                            >

                                ${escapeHTML(
                                    question.answer
                                )}

                            </p>

                        </div>


                        <div
                            class="explanation-box"
                        >

                            <strong>
                                Explanation
                            </strong>


                            <p>

                                ${escapeHTML(
                                    question.explanation
                                )}

                            </p>

                        </div>

                    </article>
                `;


                return;
            }


            // ==================================
            // ANSWERED QUESTION
            // ==================================

            const statusClass =
                answer.isCorrect

                    ? "correct-card"

                    : "incorrect-card";


            const statusText =
                answer.isCorrect

                    ? "Correct"

                    : "Incorrect";


            reviewHTML += `

                <article
                    class="
                        review-card
                        ${statusClass}
                    "
                >

                    <div
                        class="review-card-top"
                    >

                        <div
                            class="
                                review-question-number
                            "
                        >
                            Question ${index + 1}
                        </div>


                        <span
                            class="review-status"
                        >
                            ${statusText}
                        </span>

                    </div>


                    <h2>

                        ${escapeHTML(
                            answer.question
                        )}

                    </h2>


                    <div
                        class="answer-review-row"
                    >

                        <span
                            class="review-label"
                        >
                            Your Answer
                        </span>


                        <p
                            class="${
                                answer.isCorrect

                                    ? "correct-answer-text"

                                    : "wrong-answer-text"
                            }"
                        >

                            ${escapeHTML(
                                answer.selectedAnswer
                            )}

                        </p>

                    </div>
            `;


            if (!answer.isCorrect) {

                reviewHTML += `

                    <div
                        class="answer-review-row"
                    >

                        <span
                            class="review-label"
                        >
                            Correct Answer
                        </span>


                        <p
                            class="
                                correct-answer-text
                            "
                        >

                            ${escapeHTML(
                                answer.correctAnswer
                            )}

                        </p>

                    </div>
                `;
            }


            reviewHTML += `

                    <div
                        class="explanation-box"
                    >

                        <strong>
                            Explanation
                        </strong>


                        <p>

                            ${escapeHTML(
                                answer.explanation
                            )}

                        </p>

                    </div>

                </article>
            `;
        }
    );


    reviewHTML += `

            </div>


            <div class="review-actions">

                <button
                    type="button"
                    class="restart-btn"
                    onclick="restartQuiz()"
                >
                    Take Quiz Again
                </button>

            </div>

        </div>
    `;


    quizElement.innerHTML =
        reviewHTML;


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        value;


    return div.innerHTML;
}


// ==========================================
// RESTART QUIZ
// ==========================================

function restartQuiz() {

    location.reload();
}


// ==========================================
// TIMER
// ==========================================

let timeRemaining =
    QUIZ_TIME * 60;


let timerInterval;


// ==========================================
// START TIMER
// ==========================================

function startTimer() {

    updateTimerDisplay();


    timerInterval =
        setInterval(() => {

            timeRemaining--;


            if (
                timeRemaining <= 0
            ) {

                timeRemaining = 0;


                updateTimerDisplay();

                stopTimer();

                showScore();

                return;
            }


            updateTimerDisplay();

        }, 1000);
}


// ==========================================
// STOP TIMER
// ==========================================

function stopTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );
    }
}


// ==========================================
// UPDATE TIMER DISPLAY
// ==========================================

function updateTimerDisplay() {

    const timerElement =
        document.getElementById(
            "timer"
        );


    if (!timerElement) {

        return;
    }


    const minutes =
        Math.floor(
            timeRemaining / 60
        );


    const seconds =
        timeRemaining % 60;


    timerElement.textContent =

        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    // Final five minutes

    if (
        timeRemaining <= 300
    ) {

        timerElement.classList.add(
            "timer-warning"
        );
    }
}


// ==========================================
// START APPLICATION
// ==========================================

displayQuestion();

startTimer();
