let h2 = document.querySelector("h2");

//array to store sequence predicted by game
let gameSeq = [];
//array to store sequence as per the click of the user
let userSeq = []; 

let btns=["yellow","red","purple","green"];
let started = false;
let level = 0;

document.addEventListener("keypress", () => {
  if (started == false)
    {
    started = true;

    levelUp();
  } 
  
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);

}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn choose
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx){
    // console.log("curr level : ", level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b> ${level} <b> <br> Press any key to start`;
        document.querySelector("body").classList.add("red");
        setTimeout(()=>{
            document.querySelector("body").classList.remove("red");
        },250);
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor=this.id;
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq= [];
    gameSeq = [];
    level=0;
}
