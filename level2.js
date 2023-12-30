display++;

document.querySelector("#name-inp").innerHTML=`
<div class= "lvl-2_score"> </div>



<div class="judge" id="true">true</div>
<div class="judge" id="false">false</div>
<div class="lvl2-board"> 

<button class="next">press me</button>

 <div class="lvl2-card" id="card1"></div>
 <div class="lvl2-card" id="card2"></div>
 <div class="lvl2-card" id="card3"></div>
 <div class="lvl2-card" id="card4"></div>
 <div class="lvl2-card" id="card5"></div>
 <div class="lvl2-card" id="card6"></div>
 <div class="lvl2-card" id="card7"></div>
 <div class="lvl2-card" id="card8"></div>
 <div class="lvl2-card" id="card9"></div>
 <div class="lvl2-card" id="card10"></div>

   
</div>


`
let c=0;
levelCounter++;
document.querySelector(".next").addEventListener("click", function(){
    loadtran(up,2);
});
const dhoniQuestions = [
    {
        question: "MS Dhoni was born in Ranchi, Jharkhand, India.",
        answer: true
    },
    {
        question: "Dhoni is the first player to captain India in 200 ODIs.",
        answer: true
    },
    {
        question: "He is nicknamed 'Captain Cool' for his calm demeanor on the field.",
        answer: true
    },
    {
        question: "MS Dhoni is a prolific Test match batsman with multiple double centuries.",
        answer: false
    },
    {
        question: "Dhoni holds the record for the most dismissals in T20 internationals as a wicketkeeper.",
        answer: true
    },
    {
        question: "He retired from Test cricket in 2014.",
        answer: true
    },
    {
        question: "MS Dhoni is a qualified pilot.",
        answer: true
    },
    {
        question: "He has won the Rajiv Gandhi Khel Ratna award.",
        answer: true
    },
    {
        question: "Dhoni is the first cricketer to achieve 10,000 runs in One Day Internationals (ODIs) with an average of over 50.",
        answer: false
    },
    {
        question: "He has never won the Indian Premier League (IPL) with the Chennai Super Kings.",
        answer: false
    },
    {
        question: "MS Dhoni was born on July 7, 1981.",
        answer: true
    },
    {
        question: "Dhoni made his debut for the Indian cricket team in 2004.",
        answer: true
    },
    {
        question: "MS Dhoni is a left-handed batsman.",
        answer: false
    },
    {
        question: "He served as the captain of the Indian cricket team in all three formats.",
        answer: true
    },
    {
        question: "Dhoni led the Indian team to victory in the 2007 ICC World Twenty20.",
        answer: true
    },
    {
        question: "MS Dhoni announced his retirement from international cricket in 2020.",
        answer: true
    },
    {
        question: "Dhoni is known for his aggressive playing style and big-hitting abilities.",
        answer: true
    },
    {
        question: "He is the only captain to win all ICC trophies.",
        answer: true
    },
    {
        question: "MS Dhoni is a wicketkeeper-batsman.",
        answer: true
    },
    {
        question: "Dhoni has captained the Chennai Super Kings (CSK) in the Indian Premier League (IPL).",
        answer: true
    }
];

let Lv2score=0;
const cardStack = document.getElementById('lvl2-board');
const cards = document.querySelectorAll('.lvl2-card');

let currentIndex = 0;
let judge;

cards.forEach((card, index) => {
    const hammertime = new Hammer(card);
   
let mix = Math.floor(Math.random()*20);
card.innerHTML=dhoniQuestions[mix].question;
function checkVal(val){
    if(dhoniQuestions[mix].answer==val){
           Lv2score++;
           document.querySelector(".lvl-2_score").innerHTML ="score:" + Lv2score;
       }
       if(dhoniQuestions[mix].answer!=val){
           Lv2score--;
           document.querySelector(".lvl-2_score").innerHTML ="score:" + Lv2score;
       }
     if(Lv2score==7){
        reason= "u scored 7!"
        popUp(reason);
     }
    
    
    }

    hammertime.on('panstart', function (event) {
        initialX = event.center.x;
    });

    hammertime.on('panmove', function (event) {
        const deltaX = event.deltaX;
        const percentage = (deltaX / card.offsetWidth) * 100;
        const rotationAngle = 0.3 * percentage;

        card.style.transform = `translateX(${percentage}%) rotate(${rotationAngle}deg)`;
        const threshold = 200;
        // if(deltaX>threshold){
        //     document.querySelector("#true").style.backgroundColor="pink";
        // }
        // if(deltaX<threshold){
        //     document.querySelector("#true").style.backgroundColor="3498db";  
        // }

        
    });

 hammertime.on('panend', function (event) {
        const deltaX = event.deltaX;
        // const threshold = card.offsetWidth / 40;{
     let threshold;
        if(window.innerWidth <=767){
          threshold = 10;
        }
        else{threshold = 400;}
        

        console.log(threshold)
        if (deltaX > threshold) {
            // Swiped right (like)
            card.style.display = "none";
            judge = true;
            console.log(judge)
            checkVal(judge);
            
            // Implement your logic for "like" here
        } else if (deltaX < -threshold) {
            // Swiped left (dislike)
            card.style.display = "none";
           judge =  false;
           console.log(judge)
           checkVal(judge);
            // Implement your logic for "dislike" here
        }
        
       
        // Reset card position
        card.style.transform = 'translateX(0)';
       
    });
    console.log(judge);
   
    // dhoniQuestions.splice(0,mix);
c++;
});


