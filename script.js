const questions = [
    {
        question : "Which of the following methods can be used to display data in some form using Javascript ?",
        answers : [
            {text : "document.write()" , correct: "false"},
            {text : "console.log()" , correct: "false"},
            {text : "window.alert()" , correct: "false"},
            {text : "All of the Above" , correct: "true"},
        ]
    },
    {
        question : "How can a datatype be declared to be a constant type ?",
        answers : [
            {text : "const" , correct: "true"},
            {text : "var" , correct: "false"},
            {text : "let" , correct: "false"},
            {text : "constant" , correct: "flase"},
        ]
    },
    {
        question : "What keyword is used to check whether a given property is valid or not ?",
        answers : [
            {text : "in" , correct: "true"},
            {text : "is in" , correct: "false"},
            {text : "exists" , correct: "false"},
            {text : "lies" , correct: "flase"},
        ]
    },
    {
        question : "Which of the following can be used to call a JavaScript Code Snippet ?",
        answers : [
            {text : "Function/Method" , correct: "true"},
            {text : "Preprocessor" , correct: "false"},
            {text : "Triggering Event" , correct: "false"},
            {text : "RMI" , correct: "flase"},
        ]
    },
    {
        question : "Why JavaScript Engine is needed ?",
        ananswerss : [
            {text : "Both Compiling & Interpreting the JavaScript" , correct: "false"},
            {text : "Parsing the javascript" , correct: "false"},
            {text : "Interpreting the JavaScript" , correct: "true"},
            {text : "Compiling the JavaScript" , correct: "flase"},
        ]
    },
    {
        question : "Which of the following methods/operation does javascript use instead of == and != ?",
        answers : [
            {text : "JavaScript uses bitwise checking" , correct: "false"},
            {text : "JavaScript uses equalto()t" , correct: "false"},
            {text : "JavaScript uses equals() and notequals() instead" , correct: "false"},
            {text : "JavaScript uses === and !== instead" , correct: "true"},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQue();
}
function showQue() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
    });
}
startQuiz();