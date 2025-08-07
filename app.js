let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#new-btn");
// let newBtnContainer=document.querySelector(".newBtn-container");
let turn0= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetBtn.innerText="Reset Game";
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showDraw=()=>{
    msg.innerText="It's a DRAW";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

checkwinner=()=>{
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                resetBtn.innerText="NEW GAME";
            }
        }
    }
};

// newBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);

