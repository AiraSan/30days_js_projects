const questions = [
    {
        question: "What is your name?",
        answers: [
            {text: "Nimazar", correct: false},
            {text: "Mazarni", correct: false},
            {text: "zarniMa", correct: false},
            {text: "Zarmani", correct: true},
        ]
    },
    {
        question: "What is your age?",
        answers: [
            {text: 12, correct: false},
            {text: 11, correct: false},
            {text: 19, correct: true},
            {text: 18, correct: false},
        ]
    },
];

const question = document.querySelector(".question");
const answerBtn = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

const showQuestion = () => {
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex];
    let quesiontNum = currentQuestionIndex + 1;
    question.innerHTML = quesiontNum + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", (e) => {
            const selectBtn = e.target;
            const isCorrect = selectBtn.dataset.correct == "true";
            if(isCorrect) {
                selectBtn.classList.add("correct");
                score++;
            } else {
                selectBtn.classList.add("incorrect");
            }
            Array.from(answerBtn.children).forEach(button => {
                if(button.dataset.correct == "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            })
            nextBtn.style.display = "block"

        })
    })
}

startQuiz();

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function showScore() {
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}`
    nextBtn.innerHTML = "Play Again!"
    nextBtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})