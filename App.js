const questions = [
  {
    'qus': "which of the following is markup language ?",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScript",
    'd': "C",
    'correct':'a'
  },
  {
     'qus': "What year was Java Script launched",
     'a': "1996",
     'b': "1995",
     'c': "1994",
     'd': "none of above",
     'correct':'b'
   }, {
     'qus': "Which person developed by C ?",
     'a': "apj abdul kalam",
     'b': "alon musk",
     'c': "denis ritchi",
     'd': "none",
     'correct':'c'
   },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const optionInputs = document.querySelectorAll('.options');
const quesBox = document.getElementById('QuesBox');
const loadQuestion = () =>{
     if(index === total){
         return endQuiz(); 
     }
          reset();
      const data = questions[index]
      quesBox.innerText = `${index+1} ${data.qus}`;
      optionInputs[0].nextElementSibling.innerText = data.a;
      optionInputs[1].nextElementSibling.innerText = data.b;
      optionInputs[2].nextElementSibling.innerText = data.c;
      optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = ()=>{
     const ans = getAnswer()
     const data = questions[index];

     if(ans == data.correct){
          right++;
     }else{
               wrong++;
     }
     index++;
     loadQuestion();
     return;
}


const getAnswer =() =>{
     let answer ;
     optionInputs.forEach(
          (input)=> {
               if(input.checked){
                    answer =  input.value;
               }     
          }
     )
     return answer ; 
}

const reset = ()=>{
     optionInputs.forEach(
          (input)=> {
               input.checked = false; 
          }
     )
}

const endQuiz = ()=>{
     document.getElementById('box').innerHTML = `
     <h3>Thank You for Playing the quiz </h3>
     <h2>${right}/ ${total} are correct </h2>
     `;
}

loadQuestion();