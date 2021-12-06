const quizDB = [{
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "HeyText Markup Language",
        c: "HyperText MakeUp Language",
        d: "HyperText MarkUp Language",
        ans: "ans4"
    },
    {
        question: "Q2: The Browser applies the feature of a tag until it encounters ____ tag.",
        a: "Quit",
        b: "Closing",
        c: "Exit",
        d: "Deactivate",
        ans: "ans2"
    },
    {
        question: "Q3: What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Cascading Super Sheet",
        c: "Carding Style Sheep",
        d: "Common Style Sheet",
        ans: "ans1"
    },
    {
        question: "Q4: The page title is inside ____ tag.",
        a: "Body",
        b: "Head",
        c: "Division",
        d: "Table",
        ans: "ans2"
    },
    {
        question: "Q5: What is the intersection of a row and a column?",
        a: "Form",
        b: "Cursor",
        c: "Cell",
        d: "Record",
        ans: "ans3"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })



    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showscore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class = "btn" onclick = "location.reload()"> Play Again </button>
 
        `;

        showscore.classList.remove('scoreArea');
    }

});
