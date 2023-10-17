const start=document.getElementById('start')
const reset=document.getElementById('reset')
const pause=document.getElementById('pause')
const hours=document.getElementById('hour')
const minutes=document.getElementById('minute')
const seconds=document.getElementById('second')
let isPaused=false
let s=0
let m=0
let h=0
start.addEventListener('click',  startTime)
reset.addEventListener('click', resetTime)
pause.addEventListener('click', pauseTime)
let myTimer=null
function startTime(){
    
    if(!isPaused){
        myTimer=setInterval(()=>{
            s++
            if(s<10){
                seconds.textContent=`0${s}`
            }
            
            else{
                if(s==60){
                    m++
                    if(m<10){
                        minutes.textContent=`0${m}`
                    }
                    else{
                        minutes.textContent=m
                    }
                    
                    seconds.textContent='00'
                    s=0
                    if(m==60){
                        h++
                        if(h<10){
                            hours.textContent=`0${h}`
                        }
                        else{
                            hours.textContent=h
                        }
                        m=0
                        minutes.textContent='00'
                    }
                    
                    
                }
                seconds.textContent=`${s}` 
                
               
            }
            
           
        }, 1000)
       
    }

 
}


function resetTime() {
    m=0
    s=0
    h=0
    hours.textContent='00'
    seconds.textContent='00'
    minutes.textContent='00'
    clearInterval(myTimer)
}



    function pauseTime() {
        clearInterval(myTimer); // Pause the timer by clearing the interval
    }
