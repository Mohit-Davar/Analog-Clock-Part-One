let second=document.querySelector('.second')
let hour=document.querySelector('.hour')
let minute=document.querySelector('.minute')

setInterval(() => {
    let counterSec = Number(new Date().getSeconds());
    let counterHr = Number(new Date().getHours());
    let counterMin = Number(new Date().getMinutes());


    second.style.transform=`translate(-50%,-100%) rotate(${6*counterSec}deg)`
    hour.style.transform=`translate(-50%,-100%) rotate(${(1/120*counterSec)+(0.5*counterHr)+(30*counterHr)}deg)`
    minute.style.transform=`translate(-50%,-100%) rotate(${(0.1*counterSec)+(6*counterMin)}deg)`
}, 1000);

let clock=document.querySelector('.circle');
for(let i=0;i<12;i++){
    let timeBlock=document.createElement('div');
    timeBlock.id=`time${i}`;
    timeBlock.classList="time-block"
    clock.appendChild(timeBlock)
    timeBlock.style.transform=`translate(-50%,-50%) rotate(${(i+1)*30}deg)`
}