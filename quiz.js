const questions = [{
    'question': 'What is the correct syntax of doctype in HTML?',
    'a':'</doctype html>',
    'b':'<doctype html>',
    'c':'<doctype html!>',
    'd':'<!doctype html>',
    'Correct':'d'
},
{
    'question': 'Which of the following tag is used for inserting the largest heading in HTML?',
    'a':'head',
    'b':'<h1>',
    'c':'<h6>',
    'd':'heading',
    'Correct':'b'
},
{
    'question': 'Which of the following tag is used for inserting the largest heading in HTML?',
    'a':'head',
    'b':'<h1>',
    'c':'<h6>',
    'd':'heading',
    'Correct':'b'
},
{
    'question': 'Java Script is an _______ language?',
    'a':'Object-Oriented',
    'b':'Object-Based',
    'c':'Procedural',
    'd':'None of the above',
    'Correct':'a'
},
{
    'question': 'Which HTML tag is used to declare internal CSS ?',
    'a':'<Style>',
    'b':'<link>',
    'c':'<Script>',
    'd':'None of the above',
    'Correct':'a'
},
{
    'question': 'In which part of the HTML metadata is contained?',
    'a':'head tag',
    'b':'title tag',
    'c':'html tag',
    'd':'body tag',
    'Correct':'a'
}
]

let index  = 0;
let total  = questions.length;
let right = 0,
    wrong = 0;
const quebox = document.getElementById("quebox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total){
         return endquiz()
    }
    reset();
    const data = questions[index]
    // console.log(data)
    quebox.innerText = `${index + 1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer; 
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <div style=""text-align:center">
        <h3> Thank you for playing </h3>
        <h2>${right} / ${total} are correct </h2>`
    </div>
}

//initial call
loadQuestion();



