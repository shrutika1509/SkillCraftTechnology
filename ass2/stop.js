let seconds = 0o0;
let tens = 0o0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;
btnStart.addEventListener('click',()=>{
    setInterval(startTimer, 10)
})

btnStop.addEventListener('click',()=>{
     clearInterval(interval)
})
btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    seconds = '00';
    tens = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
})

function startTimer(){
    tens++;
    if(mins <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        
        getSeconds.innerHTML = '1' + seconds;
        tens = 10;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
}