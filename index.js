alert("hi");

const questions = [
    {
        question: "What is the largest animal?",
        answers:[
            {text:"shark",correct: false},
            {text:"blue whale",correct: false},
            {text:"Gold fish",correct: true},
            {text:"dolphin",correct: false},
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers:[
            {text:"Vatican city",correct: true},
            {text:"Bhutan",correct: false},
            {text:"Sri Lanka",correct: true},
            {text:"Nepal",correct: false},
        ]
    },
    {
        question: "What is the largest dessert in the world?",
        answers:[
            {text:"Gobi",correct: false},
            {text:"Kalhari",correct: false},
            {text:"Sahara",correct: true},
            {text:"Antarctica",correct: true}
        ]
    },
    {
        question: "What is the smallest continent?",
        answers:[
            {text:"Australia",correct: true},
            {text:"Europe",correct: false},
            {text:"Asia",correct: true},
            {text:"Africa",correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex +1;
     questionElement.innerHTML=questionNo + ". " + currentQuestion.question;   
     
     currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
          button.dataset.correct=answer.correct;  
        }

        button.addEventListener("click",selectAnswer);
        
     });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
    }else{
        selectBtn.classList.add("incorrect");
    }
}

startQuiz();