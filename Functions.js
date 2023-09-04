let hr =0;
let min = 0;
let sec = 0;
let misec =0;
let timer = false;
let isrunning = false;
function start()
{
timer = true;
if(!isrunning)
{
 isrunning = true;
stopwatch();}
}
function stop(){
 isrunning = false;
timer = false;
}
function reset(){
    isrunning = false;
    timer = false;
 hr =0;
 min = 0;
 sec = 0;
 misec =0;
 document.getElementById("milsec").textContent = "0"+misec;
   document.getElementById("Sec").textContent = "0"+sec;
   document.getElementById("Min").textContent = "0"+min;
   document.getElementById("hr").textContent = "0"+hr;
}
function stopwatch(){
if(timer == true )
{
    
   misec+=1; 
   if(misec ==100)
   {
    sec+=1;
    misec=0;
   }
   if(sec == 60)
   {
    min+=1;
    sec=0;
   }
   if(min ==60)
   {
    hr+=1;
    min = 0;
    sec=0;
   }
   document.getElementById("milsec").textContent = misec;
   document.getElementById("Sec").textContent = sec;
   document.getElementById("Min").textContent = min;
   document.getElementById("hr").textContent = hr;


  setTimeout("stopwatch()",10); 
}
}