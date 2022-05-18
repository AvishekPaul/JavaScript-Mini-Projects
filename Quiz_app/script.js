const quizData = [
    {
        question : "What is Paul's age?",
        a: "20",
        b: "26",
        c: "30",
        d: "25",
        correct: "b"
    },
    {
        question : "Which programming language Paul is learning now?",
        a: "JavaScript",
        b: "C",
        c: "Python",
        d: "C++",
        correct: "a"
    },
    {
        question : "how many programming language does Paul know?",
        a: "5",
        b: "2",
        c: "4",
        d: "3",
        correct: "d"
    },
    {
        question : "Is Paul looking for a job right now?",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "None of the above",
        correct: "a"
    },
    {
        question : "What is Paul's first name?",
        a: "Avijit",
        b: "Amio",
        c: "Avishek",
        d: "Abid",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answerElement = document.querySelectorAll(".answer");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerHTML = currentQuizData.question;
    aText.innerHTML = currentQuizData.a;
    bText.innerHTML = currentQuizData.b;
    cText.innerHTML = currentQuizData.c;
    dText.innerHTML = currentQuizData.d;

    
}

function getSelected() {
    
    
    let answer = undefined;

    answerElement.forEach((answerElement) => {
        if(answerElement.checked){
            answer =  answerElement.id;
        }
    });

    return answer;
}

function deselectAnswer(){
    answerElement.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    if(answer){
        if(answer=== quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2> You have corrected ${score}/${quizData.length} question. </h2> <button onclick="location.reload()">Reload</button>`
        }
}

    
});
