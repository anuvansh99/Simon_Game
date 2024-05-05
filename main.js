var user=[];
var sequence=[];
var level=0;
var score=0;

function randint(){
    var randint=Math.floor(Math.random()*4);
    return randint;
}
function game(){
    if(cmp(user, sequence)){
        user=[];
        score=score+100;
        document.getElementById("score").innerHTML="SCORE:"+score;
        start();
    }
    else {
        document.querySelector("h1").innerHTML="YOUR SCORE:"+score+"<br> TRY AGAIN";
        user=[];
        sequence=[];
        level=0;
        score=0;
    }
}
function nextSequence(a){
    var b=randint();
    document.querySelectorAll(".box")[b].click();
    a.push(b);
    user.pop();
    setTimeout(game, 5000);
    timer();
}
    
function cmp(a,b){
    var len=a.length;
    if(len!=b.length){
        return false;
    }
    else {
        for(var i=0; i<len; i++){
            if(a[i]!=b[i]){
                return false;
            }
        }
    }
    return true;
}

function start(){
    level++;
    document.querySelector("h1").innerHTML="LEVEL:"+level;
    nextSequence(sequence);
}

function fun(val){
    user.push(Number(val)-1);
    if(val==1){
        var music=new Audio("music1.mp3");
        music.play();
        $(".r").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else if(val==2){
        var music=new Audio("music2.mp3");
        music.play();
        $(".b").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else if(val==3){
        var music=new Audio("music3.mp3");
        music.play();
        $(".g").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else if(val==4){
        var music=new Audio("music4.mp3");
        music.play();
        $(".y").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
}

document.querySelector("h1").addEventListener("click", start);

for(var i=0; i<document.querySelectorAll(".box").length;i++){
        document.querySelectorAll(".box")[i].addEventListener("click", function(){
        var val=this.innerHTML;
        fun(val);
    });
}
document.addEventListener("keypress", function(event){
    var char=Number(event.key);
    fun(char);
});
function timer(){
    var timeleft = 8;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 8 - timeleft;
  timeleft -= 2;
}, 1000);
}
