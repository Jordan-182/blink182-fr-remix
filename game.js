const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;


// push the questions into availableQuestions Array
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

// set question number and question and options
function getNewQuestion(){
    // set question number
    questionNumber.innerHTML = "Chanson " + (questionCounter + 1) + " sur " + quiz.length;
    // set question text
    // get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // get the position of 'questionIndex' from the availableQuestion Array;
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' from the availableQuestion Array, so the question doesn't repeat
    availableQuestions.splice(index1,1);
    // set options
    // get the lenght of options
    const optionLen = currentQuestion.options.length;
    // push options into availableOptions Array
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }

    optionContainer.innerHTML = '';

    let animationDelay = 0.15;
    // create options in html
    for(let i=0; i<optionLen; i++){
        // random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of 'optionIndex' from the availableOptions Array
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the 'optionIndex' from the availableOptions Array, so the options doesn't repeat
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }
    questionCounter++
}

// get the result of current attempt question
function getResult(element){
    const id = parseInt(element.id);
    // get the answer by comparing the id of clicked option
    if(id === currentQuestion.answer){
        // set the green color to correct option
        element.classList.add("correct");
        // add the indicator to correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;
    }
    else{
        // set the red color to incorrect option
        element.classList.add("wrong");
        // add the indicator to wrong mark
        updateAnswerIndicator("wrong");

        // if answer incorrect then show correct answer green
        const optionLen = optionContainer.children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}

// make all the options unclickable once the user selected an option
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0 ; i<optionLen ; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}

function next(){
    if(questionCounter === quiz.length){
        quizOver();
    }
    else{
        getNewQuestion();
    }
}

function quizOver(){
    // hide quizBox
    quizBox.classList.add("hide");
    // show resultBox
    resultBox.classList.remove("hide");
    quizResult();
}

// get the quiz result
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
    if (correctAnswers === 0){
        resultBox.querySelector(".comment").innerHTML = "Le zéro pointé... c'est l'heure de découvrir le meilleur groupe de l'histoire!"
    }
    else if (correctAnswers > 0 && correctAnswers <4){
        resultBox.querySelector(".comment").innerHTML = "Connais-tu vraiment ce groupe?"
    }
    else if (correctAnswers > 3 && correctAnswers <7){
        resultBox.querySelector(".comment").innerHTML = "Il faudrait penser à réviser ses classiques!"
    }
    else if (correctAnswers > 6 && correctAnswers <10){
        resultBox.querySelector(".comment").innerHTML = "Tu connais tes classiques mais il ne faut pas oublier certains albums sous-côtés!"
    }
    else {
        resultBox.querySelector(".comment").innerHTML = "Un sans faute! Tu maitrises tous les albums!"
    }
}

function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
}

function tryAgainQuiz(){
    // hide resultBox
    resultBox.classList.add("hide");
    // show quizBox
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome(){
    // hide resultBox
    resultBox.classList.add("hide");
    // show homeBox
    homeBox.classList.remove("hide");
    resetQuiz();
}

// ***Starting Point***
function startQuiz(){
    // hide homeBox
    homeBox.classList.add("hide");
    // show quizBox
    quizBox.classList.remove("hide");
    // first set all questions in availableQuestions Array
    setAvailableQuestions();
    // then call getNewQuestion(); function
    getNewQuestion();
    // to create indicator of answers
    answersIndicator();
}

window.onload = function(){
    homeBox.querySelector(".total-question").innerHTML = quiz.length;
}