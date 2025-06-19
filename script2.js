let timerDisplay = document.querySelector('.timerDisplay');
let startbtn = document.getElementById('startbtn');
let pausebtn = document.getElementById('pausebtn');
let resetbtn = document.getElementById('resetbtn');
let msec = 0;
let secs = 0; 
let mins = 0;
let timerId = null;
startbtn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTmer,10);
});
pausebtn.addEventListener('click',function(){
    clearInterval(timerId);
});
resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = '00 : 00 : 00';
});
function startTmer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec <10 ? '0${msec}' : msec;
    let secsString = secs <10 ? '0${secs}' : secs;
    let minsString = mins <10 ? '0${mins}' : mins;

    timerDisplay.innerHTML = '${minsString} : ${secsString} : ${msecString}';


}