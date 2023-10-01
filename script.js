const questions = [
    {
        question: "How many times has India won the Cricket World Cup?",
        options: ["2", "3", "4", "1"],
        correctAnswer: "2"
    },
    {
        question: "Which Indian cricketer is also known as the 'God of Cricket'?",
        options: ["MS Dhoni", "Yuvraj Singh", "Virat Kohli", "Sachin Tendulkar"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "What is the moniker given to the Indian cricket team?",
        options: ["Men in Blue", "The Team of Lions", "The Indian Army", "None of the above"],
        correctAnswer: "Men in Blue"
    },
    {
        question: "Who was the first Indian batsman to hit a century in a Test match?",
        options: ["Lala Amarnath Bharadwaj", "Kapil Dev", "Sunil Gavaskar", "Vijay Hazare"],
        correctAnswer: "Lala Amarnath Bharadwaj"
    },
    {
        question: "When did India play its first Test match?",
        options: ["1931", "1930", "1932", "1929"],
        correctAnswer: "1932"
    },
    {
        question: "How many times has India won the Asia Cup?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "8"
    },
    {
        question: "Who is the current Captain of the Indian National Men’s Cricket Team?",
        options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Roger Binny"],
        correctAnswer: "Rohit Sharma"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart-button");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const options = currentQuestion.options;
    optionsElement.innerHTML = "";

    options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(optionElement);
    });

    startTimer(30); // Start a 30-second timer
}

function startTimer(seconds) {
    let timeLeft = seconds;
    const timer = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            checkAnswer(null); // Time's up, check answer
        }
    }, 1000);
}

displayQuestion(); // Display the first question

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionElement.textContent = "";
    optionsElement.style.display = "none";
    submitButton.style.display = "none";
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    restartButton.style.display = "block";
}

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    resultElement.textContent = "";
    restartButton.style.display = "none";
    optionsElement.style.display = "block";
    submitButton.style.display = "block";
});

submitButton.addEventListener("click", () => {
    checkAnswer(null); // Check the answer when the user clicks the submit button
});
