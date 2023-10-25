let availWords=["HELLO","GAMER","LOSER","GAMES"];
let x=1//Math.floor(Math.random()*4);
let feedback = new Array(5);
let message=document.getElementById("message");
function checkWords(){
    let guessWords=document.getElementById("word").value;
    guessWords=guessWords.toUpperCase();
    let i;
    
    for(i=0;i<5;i++){
        let availAlpha=availWords[x].charAt(i);
        let guessAlpha=guessWords.charAt(i);
        if(availAlpha==guessAlpha){
            feedback[i]="green";
        }
        else if(availWords[x].includes(guessAlpha)){
            feedback[i]="yellow";
        }
        else{
            feedback[i]="white";
        }
    }
    checkFeedback();
}
function checkFeedback(){
    for(i=0;i<5;i++){
        if(feedback[i]=="green")
        {
            message.innerhtml=`<span style="background-color:green">${availWords.charAt[i]}</span>`;
        }
    }
}