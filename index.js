var a=0,b=0;
var c=[];
function change_dice(){
    if(a===1){
        document.querySelector(".dice-section1 img").setAttribute("src","dice1.png");
    }
    else if(a===2){
        document.querySelector(".dice-section1 img").setAttribute("src","dice2.png");
    }
    else if(a===3){
        document.querySelector(".dice-section1 img").setAttribute("src","dice3.png");
    }
    else if(a===4){
        document.querySelector(".dice-section1 img").setAttribute("src","dice4.png");
    }
    else if(a===5){
        document.querySelector(".dice-section1 img").setAttribute("src","dice5.png");   
    }
    else{
        document.querySelector(".dice-section1 img").setAttribute("src","dice6.png");
    }
    if(b===1){
        document.querySelector(".dice-section2 img").setAttribute("src","dice1.png");
    }
    else if(b===2){
        document.querySelector(".dice-section2 img").setAttribute("src","dice2.png");
    }
    else if(b===3){
        document.querySelector(".dice-section2 img").setAttribute("src","dice3.png");
    }
    else if(b===4){
        document.querySelector(".dice-section2 img").setAttribute("src","dice4.png");
    }
    else if(b===5){
        document.querySelector(".dice-section2 img").setAttribute("src","dice5.png");   
    }
    else{
        document.querySelector(".dice-section2 img").setAttribute("src","dice6.png");
    }
}
document.querySelector(".heading h1").addEventListener("click",function(){
    a=Math.floor((Math.random()*6)+1);
    b=Math.floor((Math.random()*6)+1);
    console.log(a+" "+b);
    if(a>b){
        document.querySelector(".heading h1").textContent="Player 1 Wins / Refresh Here";
    }
    else if(a<b){
        document.querySelector(".heading h1").textContent="Player 2 Wins / Refresh here"
    }
    else{
        document.querySelector(".heading h1").textContent="Draw / Refresh here";
    }
    change_dice();
});
// console.log(document.querySelector(".dice-section2 img").setAttribute("src","dice6.png"));
