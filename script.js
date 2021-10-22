let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let seconds = 0;
let timerId = null;

function startTimer() {
    if(!timerId) {
        timerId = setInterval(() => {                 
            document.querySelector('.timer').innerHTML = seconds++;
        }, 1000)
    }
}


function stopTimer() {
    if(timerId) {
        clearInterval(timerId);
        timerId = null;
    }
    
    // document.querySelector('.timer').innerHTML = 'STOP'    
}

function resetTimer() {
    stopTimer(); 
    if(timerId) {        
        Location.reload();                        
    }
    seconds = 0;    
    document.querySelector('.timer').innerHTML = '';    
}


start.onclick = startTimer
stop.onclick = stopTimer;
reset.onclick = resetTimer;