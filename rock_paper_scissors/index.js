

function callme(){
    const randomNumber = Math.random();
    console.log(randomNumber);
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
    console.log(computer);
}