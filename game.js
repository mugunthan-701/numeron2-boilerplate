// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1=document.getElementById("number1")
let number2=document.getElementById("number2")
let number3=document.getElementById("number3")
let timer=document.getElementById("timer")


let time=20
let score=0
let operation
function randomNumber(){
    return Math.floor(Math.random()*100)+1;
}

function displayNumbers(){
    let num1 =randomNumber();
    let num2 =randomNumber();
    let num3 =UpdateAnswer(num1,num2)
    number1.innerHTML=num1;
    number2.innerHTML=num2
    number3.innerText=num3
}

displayNumbers()


// Iteration 3: Creating variables required to make the game function
function UpdateAnswer(num1,num2){
let ans =0;
let operator =["+","-","*","/","%"]
operation=operator[ Math.floor(Math.random() * 5)]
console.log(operation)
if(operation=="+"){
    ans=num1+num2
}
else if(operation=="-"){
    ans=num1-num2
}
else if(operation=="*"){
    ans=num1*num2
}
else if(operation=="/"){
    ans=parseInt(num1/num2)
}
else if(operation=="%"){
    ans=num1%num2
}
return ans
}



function startTimer(){
    timer.innerText =time;
    time--
    if(time<=0){
      gameover()
    }
}
setInterval(startTimer,1000)


var button=document.getElementById("buttons")

button.addEventListener("click",(e)=>{
    compare(e.target.id)
})

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
function compare(i){
    if(i=="plus"&& operation=="+"||i=="minus" && operation=="-"||i=="mul" && operation=="*"||i=="divide" && operation=="/"||i=="modulus" && operation=="%"){
        time=20;
        score++;
        localStorage.setItem("score",score)
        displayNumbers();
    }
    else{
        gameover();
    }
}

function gameover(){
    window.location.href="gameover.html";
    
}
// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional
// Iteration 7: Making Timer functional


