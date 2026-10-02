// ========================================
// STUDY TIMER
// ========================================

let timeLeft = 25 * 60;
let timer = null;

function startTimer() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        if (timeLeft <= 0) {

            clearInterval(timer);
            timer = null;

            alert("Study session complete! 🎉");

            return;
        }

        timeLeft--;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").textContent =
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    }, 1000);
}


function pauseTimer() {

    clearInterval(timer);
    timer = null;

}


function resetTimer() {

    clearInterval(timer);
    timer = null;

    timeLeft = 25 * 60;

    document.getElementById("timer").textContent = "25:00";

}


// ========================================
// SUBJECT MATERIALS
// ========================================

function showMaterial(subject) {

    let materialDisplay =
        document.getElementById("materialDisplay");

    if (subject === "Math") {

        materialDisplay.innerHTML = `
            <h3>📐 Math Materials</h3>
            <p>Algebra</p>
            <p>Ratio and proportion</p>
            <p>Percentage</p>
            <p>Profit and loss</p>
            <p>Practice questions</p>
        `;

    }

    else if (subject === "Science") {

        materialDisplay.innerHTML = `
            <h3>🔬 Science Materials</h3>
            <p>Heat and temperature</p>
            <p>Respiration</p>
            <p>Digestion</p>
            <p>Circulation</p>
            <p>Chapter revision</p>
        `;

    }

    else if (subject === "English") {

        materialDisplay.innerHTML = `
            <h3>📖 English Materials</h3>
            <p>Grammar</p>
            <p>Vocabulary</p>
            <p>Transformation</p>
            <p>Completing stories</p>
            <p>Dialogue writing</p>
        `;

    }

    else if (subject === "BGS") {

        materialDisplay.innerHTML = `
            <h3>🌍 BGS Materials</h3>
            <p>Population</p>
            <p>Economy</p>
            <p>Renewable energy</p>
            <p>Liberation struggle</p>
            <p>Important definitions</p>
        `;

    }

}


// ========================================
// QUIZ
// ========================================

let quizQuestions = [

    {
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        answer: 2
    },

    {
        question: "Which gas is needed for human respiration?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: 1
    },

    {
        question: "Which sentence is grammatically correct?",
        options: [
            "She go to school.",
            "She going to school.",
            "She goes to school.",
            "She gone to school."
        ],
        answer: 2
    },

    {
        question: "What is the capital of Bangladesh?",
        options: [
            "Chattogram",
            "Dhaka",
            "Rajshahi",
            "Khulna"
        ],
        answer: 1
    },

    {
        question: "What is the SI unit of temperature?",
        options: [
            "Celsius",
            "Fahrenheit",
            "Kelvin",
            "Joule"
        ],
        answer: 2
    },

    {
        question: "If a = 5, what is 2a + 3?",
        options: [
            "10",
            "11",
            "13",
            "15"
        ],
        answer: 2
    },

    {
        question: "Which of these is a renewable source of energy?",
        options: [
            "Coal",
            "Natural gas",
            "Solar energy",
            "Petroleum"
        ],
        answer: 2
    },

    {
        question: "Choose the correct past tense of 'go'.",
        options: [
            "Goed",
            "Gone",
            "Went",
            "Going"
        ],
        answer: 2
    },

    {
        question: "What does NGO stand for?",
        options: [
            "National Government Organization",
            "Non-Governmental Organization",
            "New Government Office",
            "National General Organization"
        ],
        answer: 1
    },

    {
        question: "What is the result of 3/4 + 1/4?",
        options: [
            "1/2",
            "3/4",
            "1",
            "2"
        ],
        answer: 2
    }

];


let currentQuestion = 0;
let quizScore = 0;


// Start the quiz

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    showQuestion();

}


// Show one question

function showQuestion() {

    let quizArea =
        document.getElementById("quizArea");

    let q = quizQuestions[currentQuestion];

    quizArea.innerHTML = `

        <h3>
            Question ${currentQuestion + 1}
            of ${quizQuestions.length}
        </h3>

        <p>
            <strong>${q.question}</strong>
        </p>

        <div class="quiz-options">

            ${q.options.map((option, index) => `

                <button
                    onclick="checkAnswer(${index})"
                    class="quiz-option"
                >
                    ${option}
                </button>

            `).join("")}

        </div>

    `;

}


// Check answer

function checkAnswer(selected) {

    let q = quizQuestions[currentQuestion];

    let quizArea =
        document.getElementById("quizArea");

    let buttons =
        document.querySelectorAll(".quiz-option");


    // Disable all buttons

    buttons.forEach(function(button) {
        button.disabled = true;
    });


    if (selected === q.answer) {

        quizScore++;

        buttons[selected].textContent += " ✓";

        quizArea.innerHTML += `
            <p>
                <strong>Correct! 🎉</strong>
            </p>

            <button onclick="nextQuestion()">
                Next Question →
            </button>
        `;

    }

    else {

        buttons[selected].textContent += " ✗";

        buttons[q.answer].textContent += " ✓";

        quizArea.innerHTML += `
            <p>
                <strong>Not quite.</strong>
                The correct answer is:
                ${q.options[q.answer]}
            </p>

            <button onclick="nextQuestion()">
                Next Question →
            </button>
        `;

    }

}


// Move to next question

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {

        showQuizResult();

    }

    else {

        showQuestion();

    }

}


// Show final result

function showQuizResult() {

    let percentage =
        Math.round(
            (quizScore / quizQuestions.length) * 100
        );

    let quizArea =
        document.getElementById("quizArea");

    quizArea.innerHTML = `

        <h3>🎉 Quiz Complete!</h3>

        <p>
            You scored
            <strong>
                ${quizScore} / ${quizQuestions.length}
            </strong>
        </p>

        <p>
            Percentage: <strong>${percentage}%</strong>
        </p>

        <button onclick="startQuiz()">
            Try Again
        </button>

    `;

}


// ========================================
// FLASHCARDS
// ========================================

let flashcards = [

    {
        question: "What is the capital of Bangladesh?",
        answer: "Dhaka"
    },

    {
        question: "What is the formula for percentage?",
        answer: "(Part ÷ Whole) × 100"
    },

    {
        question: "What is the SI unit of temperature?",
        answer: "Kelvin (K)"
    },

    {
        question: "What is an NGO?",
        answer: "A non-governmental organization."
    },

    {
        question: "What gas do humans need for respiration?",
        answer: "Oxygen"
    }

];


let currentCard = 0;
let showingAnswer = false;


function showCard() {

    document.getElementById("cardQuestion").textContent =
        flashcards[currentCard].question;

    document.getElementById("cardAnswer").textContent =
        flashcards[currentCard].answer;

    document.getElementById("cardAnswer").style.display =
        "none";

    showingAnswer = false;

    document.getElementById("cardNumber").textContent =
        "Card " +
        (currentCard + 1) +
        " of " +
        flashcards.length;

}


function flipCard() {

    let answer =
        document.getElementById("cardAnswer");

    if (showingAnswer) {

        answer.style.display = "none";
        showingAnswer = false;

    }

    else {

        answer.style.display = "block";
        showingAnswer = true;

    }

}


function nextCard() {

    currentCard++;

    if (currentCard >= flashcards.length) {
        currentCard = 0;
    }

    showCard();

}


function previousCard() {

    currentCard--;

    if (currentCard < 0) {
        currentCard = flashcards.length - 1;
    }

    showCard();

}


// ========================================
// TODAY'S GOAL
// ========================================

function completeGoal() {

    document.getElementById("goalMessage").textContent =
        "🎉 Great job! Today's goal is complete!";

}


// Show first flashcard

showCard();