
const score=JSON.parse(localStorage.getItem('score'));
function genrateComputer(){
    const randomNumber = Math.random();
    var computer="";
    if(randomNumber<=0.33){
        computer="Rock";    
    }

    else if(randomNumber<=0.66){
        computer="Paper";
    }
    else{
        computer="Scissors";
    }
    return computer;
}
function playGame(playerMove){
    const computer=genrateComputer();
    let result="";
    if(playerMove==='Scissors'){
        if(computer=="Rock"){
            result="you loose";
            score.losses++;
        }
        else if(computer=="Paper"){
            result="you win";
            score.wins++;
        }
        else if(computer=="Scissors"){
            result="Tie"; 
            score.ties++;
        }
    }
        
    if(playerMove==='Rock'){
        if(computer=="Rock"){
            result="Tie";
            score.ties++;
        }
        else if(computer=="Paper"){
            result="you loose";
            score.losses++;
        }
        else if(computer=="Scissors"){
            result="You win"; 
            score.wins++;
        }
    }
    if(playerMove==='Paper'){
        if(computer=="Rock"){
            result="You Win";
            score.wins++;
        }
        else if(computer=="Paper"){
            result="Tie";
            score.ties++;
        }
        else if(computer=="Scissors"){
            result="You loose"; 
            score.losses++;
        }
    }
    /*document.querySelector("#player").innerHTML = "<h1>Player choice : " + playerMove + " ";
    document.querySelector("#computer").innerHTML ="<h1>Computer Choice : " + computer + " ";*/           
    document.querySelector(".score").innerText="Score--> "+score.wins+"-wins , "+score.losses+"-losses ,"+score.ties+"-ties";
    /*alert("you choose: "+playerMove + "__computer choose: "+computer+"\n"+ result+"\n"+scoreboard);
    localStorage.setItem("score", JSON.stringify(score));*/
}
function resetScore(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    document.querySelector(".score").innerText="Score--> "+score.wins+"-wins , "+score.losses+"-losses ,"+score.ties+"-ties";
}
function sub() {
    const btn = document.querySelector("#sub");

    if(btn.innerText=="Subscribe"){
        btn.innerText="Subscribed";

    }
    else{
        btn.innerText="Subscribe";
    }
    
}