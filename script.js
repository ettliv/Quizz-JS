const quizData = [
    {
        question: "Что у женщины 2, а у коровы четыре?",
        a: "Руки",
        b: "Уши",
        c: "Грудь",
        d: "Ноги",
        correct: "d",
    },
    {
        question: "Что принадлежит тебе, но чаще используют другие?",
        a: "Твои идеи",
        b: "Твое имя",
        c: "Твои шутки",
        d: "Твоя доброта",
        correct: "b",
    },
    {
        question: "Люди покупают это, чтобы поесть, но никогда не едят?",
        a: "Тарелка",
        b: "Вилка",
        c: "Нож",
        d: "Микроволновка",
        correct: "a",
    },
    {
        question: "Над чем люди обычно смеются?",
        a: "Падающий ребёнок",
        b: "Шутка",
        c: "Над тобой",
        d: "Ничего из выше перечисленного",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Ты ответил(а) на ${score}/${quizData.length} вопросов правильно</h2>

           <button onclick="location.reload()">Пройти тест заново</button>
           `
       }
    }
})