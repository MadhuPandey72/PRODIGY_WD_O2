
const timer = document.getElementById("stopwatch");

let hr = 0;
let min = 0;
let sec = 0 ;
let pauseTime =true;
let lapCount = 1 ;

function startTimer () {
   if (pauseTime){
       pauseTime =false;
       timerCycle();
   }
   }
   
    function pauseTimer () {   
           pauseTime= true;
   }
   function resetTimer (){
       pauseTime =  true;
       sec = 0;
       min = 0 ;
       hr = 0;
       lapCount = 1;
       timer .innerHTML = "00:00:00";

       document.querySelectorAll(".lap-entry").forEach(el => el.remove());
   }

   function timerCycle(){
       if (!pauseTime) {
           sec++;
               if(sec === 60) {
               min ++;
               sec = 0;

           }
           if(min === 60) {
               hr++;
               min = 0;            
       }

       let hrStr = hr <10 ? "0" + hr :hr;
      let minStr = min < 10 ? "0" + min: min ;  
      let secStr = min < 10 ? "0" + sec: sec ;  

   
       timer.innerHTML = `${hrStr} : ${minStr} : ${secStr}`;
       setTimeout(timerCycle,1000);
       }
   }
   function recordLap() {
       if (pauseTime) return ;

  

   const laps = document. createElement ("div");
   laps.className = "lap-entry";
    laps.innerText = `Lap ${lapCount++}:${timer.innerHTML}`;

    document.body.appendChild(laps);
    
   }

 

