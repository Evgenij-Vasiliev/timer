let start = document.querySelector('.start');//кнопка начала
let stop = document.querySelector('.stop');//кнопка остановки
let reset = document.querySelector('.reset');//кнопка сброса

let totalSeconds = 0;
let timerId = null;

function startTimer() {
    if(!timerId) {
        timerId = setInterval(() => {                 
            document.querySelector('.timer').innerHTML = totalSeconds++;
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
    if(timerId) {       
        Location.reload();                
    }
    totalSeconds = 0;    
    document.querySelector('.timer').innerHTML = '';    
}


start.onclick = startTimer//без скобок
stop.onclick = stopTimer;//без скобок
reset.onclick = resetTimer;//без скобок