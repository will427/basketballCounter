const teamAce = document.getElementById("teamAce");
const teamWater = document.getElementById("teamWater"); 
const btnIncAce = document.getElementById("BtnIncAce"); 
const btnDecAce = document.getElementById("BtnDecAce"); 
const btnIncWater = document.getElementById("BtnIncWater"); 
const btnDecWater = document.getElementById("BtnDecWater"); 
const message = document.getElementById("message");
let counterAce = 0;
let counterWater = 0;

    function increment(){

        while(btnIncAce.addEventListener("click",()=>{
            
            
            btnDecAce.disabled =false;
            message.classList.remove("red");
            message.textContent = "";
            counterAce++;
            if(counterAce >9 )
            {            
                teamAce.textContent = counterAce;
            }
            else
            {
                teamAce.textContent = "0" + counterAce;
            }
            if(counterAce == 20){
                btnDecAce.disabled = true;
                btnDecWater.disabled = true;
                btnIncAce.disabled = true;
                btnIncWater.disabled = true;
                message.classList.add("green");
                message.textContent = "Team Ace has won!. Resetting settings.";
            setTimeout(() => {
                counterAce = 0;
                counterWater = 0;
                message.textContent = "";
                teamAce.textContent = "00";
                teamWater.textContent = "00";
                btnDecAce.disabled = false;
                btnDecWater.disabled = false;
                btnIncAce.disabled = false;
                btnIncWater.disabled = false;
            }, 2000)}
            
        }));

        while(btnIncWater.addEventListener("click",()=>{
    
            
            btnDecWater.disabled = false;
            message.classList.remove("red");
            message.textContent = "";
            counterWater++;
            if(counterWater >9 )
            {            
                teamWater.textContent = counterWater;
            }
            else
            {
                teamWater.textContent = "0" + counterWater;
            }
            if(counterWater == 20){
                btnDecAce.disabled = true;
                btnDecWater.disabled = true;
                btnIncAce.disabled = true;
                btnIncWater.disabled = true;
                message.classList.add("green");
                message.textContent = "Team Water has won!. Resetting settings.";
            setTimeout(() => {
                counterAce = 0;
                counterWater = 0;
                message.textContent = "";
                teamAce.textContent = "00";
                teamWater.textContent = "00";
                btnDecAce.disabled = false;
                btnDecWater.disabled = false;
                btnIncAce.disabled = false;
                btnIncWater.disabled = false;
            }, 2000)}
        }));
        
    }

    function decrement()
    {

        while(btnDecAce.addEventListener("click", ()=>
        {

            counterAce--;
            if(counterAce >9 )
            {            
                teamAce.textContent = counterAce;
            }
            else
            {
                teamAce.textContent = "0" + counterAce;
            }

            if(counterAce <=0)
            {
                counterAce=0;
                teamAce.textContent = "0" + counterAce;
                btnDecAce.disabled=true;
                message.classList.add("red");
                message.textContent = "you cannot have less than 0 points";
            }
        }));
        
        while(btnDecWater.addEventListener("click", ()=>
        {

            counterWater--;
            if(counterWater >9 )
            {            
                teamWater.textContent = counterWater;
            }
            else
            {
                teamWater.textContent = "0" + counterWater;
            }

            if(counterWater <=0)
            {
                
                counterWater=0;
                teamWater.textContent = "0" + counterWater;
                btnDecWater.disabled=true;
                message.classList.add("red");
                message.textContent = "you cannot have less than 0 points";
            }
        }));

        
    }


    increment();
    decrement();




