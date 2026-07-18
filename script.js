// FefeX Gaming feliratkozó animáció

let subscribers = 306;

let counter = document.getElementById("subs");

let start = 0;

let animation = setInterval(()=>{

    if(start >= subscribers){

        clearInterval(animation);

    }else{

        start++;

        counter.innerHTML = start;

    }

},10);




// Kvíz

const questions = [

{
question:"🎮 Mi a csatorna neve?",
answers:[
"FefeX Gaming",
"Gaming Pro",
"Fefe Channel",
"Game World"
],
correct:0
},


{
question:"🔥 Milyen témával foglalkozik a csatorna?",
answers:[
"Főzés",
"Gaming",
"Sport",
"Autók"
],
correct:1
},


{
question:"⛏️ Melyik játék lehet a csatornán?",
answers:[
"Minecraft",
"Excel",
"Word",
"Jegyzettömb"
],
correct:0
},


{
question:"▶️ Hol található a csatorna?",
answers:[
"YouTube",
"Netflix",
"Spotify",
"TV"
],
correct:0
},


{
question:"🔔 Mit érdemes megnyomni új videókért?",
answers:[
"Kilépés",
"Harang",
"Törlés",
"Frissítés"
],
correct:1
}

];



let currentQuestion = 0;

let score = 0;



function loadQuestion(){


let q = questions[currentQuestion];


document.getElementById("question").innerHTML=q.question;


let buttons="";


q.answers.forEach((answer,index)=>{


buttons +=

`
<button onclick="checkAnswer(${index})">
${answer}
</button>
`;

});


document.getElementById("answers").innerHTML=buttons;


document.getElementById("result").innerHTML="";


}





function checkAnswer(answer){


if(answer === questions[currentQuestion].correct){

score++;

document.getElementById("result").innerHTML="✅ Helyes!";

}else{

document.getElementById("result").innerHTML="❌ Hibás!";

}


}



function nextQuestion(){


currentQuestion++;


if(currentQuestion < questions.length){


loadQuestion();


}

else{


document.querySelector(".quiz-box").innerHTML=

`

<h2>🎉 Kész a kvíz!</h2>

<h3>Eredmény: ${score}/${questions.length}</h3>

<button onclick="location.reload()">
Újra
</button>

`;

}


}



loadQuestion();
