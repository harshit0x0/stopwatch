const time = document.querySelector(".time");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const pauseBtn = document.querySelector(".pause");

const hrs= document.querySelector(".hours");
const min= document.querySelector(".minutes");
const sec= document.querySelector(".seconds");


console.log(time);

let temp = window.getComputedStyle(startBtn).getPropertyValue("opacity");
let pause =true;
let timearr = [0,0,0];

function pad(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
}
function switchBtn(){
    startBtn.style.opacity = 1- temp ;
    pauseBtn.style.opacity = temp;
    temp = 1-temp;
}
function updateTime(a,b,c){
    hrs.innerText=pad(a);
    min.innerText=pad(b);
    sec.innerText=pad(c);
}

let startStopwatch = function(){
    function loop(){
        if(!pause){
            timearr[2]++;
            updateTime(timearr[0],timearr[1],timearr[2]);
            if(timearr[2]>=60){
                timearr[1]++;
                timearr[2] = 0;
            }
            console.log(time.innerText);
            if(timearr[1]>=60){ timearr[1]=0; timearr[0]++; }
            if(timearr[0]>99){ timearr=[0,0,0]; }
            setTimeout(loop,10);
        }
    }
    loop();
}

startBtn.addEventListener('click',function(){    
    switchBtn();
    pause^=true;
    startStopwatch();
})

resetBtn.addEventListener('click',function(){
    if(pause==false){
        pause=true;
        switchBtn();
    }
    timearr=[0,0,0];
    updateTime(0,0,0);
})