let score =0;

let levelCounter =1;
let up = "0%";
let dwn = "100%";



document.querySelector(".go").addEventListener("click", getVal)
function popUp(){

    document.querySelector("#end-sec").style.display="block";
    document.querySelector("#bole").play();
    document.querySelector("#name-inp").style.display="none";

    document.querySelector(".reason").innerHTML=reason;
   document.querySelector("#score").innerHTML += score;

    console.log("thala for a reason");
}
// setInterval(function () {let date = new Date();
//     let min =date.getMinutes();
//     if(min % 10 == 7){
//         reason = "lmao is 7'0' clock"
//         popUp();
//     }
//     console.log(min);}, 30000);

let reason;

function getVal(){
   
   
    let text = document.querySelector("#text").value;
    console.log(text);
    let num = isThala(text);
   
    console.log(num);
    
    function isThala(texts){
        if(texts==7){
            reason = "username == 7"
            return true;
        }
        if(texts % 7 == 0){
        let divv= texts/7 ;
            reason = `${divv} * 7`
            return true;
        }
        if((texts.length)==7){
            reason = texts.split("").join("+") + " =7"
            console.log(reason);
            return true;
        }
    }
    
    if(num){
       popUp(reason);
    }
    if(!num){
        loadtran(up ,1);
        levelCounter++;
        //load lvl1
        
    }

}


function loadtran(val,display){
    
    document.querySelector("#inbet").style.top= val;
    document.querySelector("#inbet").innerHTML += `Congratulations! you have passed level ${display} , lets move to level ${display+1}`;
    
}

// loading levels
function loadScript(srp){
const script = document.createElement('script');
script.src = srp;
document.head.appendChild(script);
}

//loading level1
document.querySelector("#inbet").addEventListener("click",j)



function j(){
    console.log("clicked")

    loadtran(dwn);
    if(levelCounter==2){
    loadScript("level2.js")}
    if(levelCounter==3){
        loadScript("level3.js")

    }
} 

function zum(){
    document.querySelector(".tutorial").style.top="70vh"
    // document.querySelector(".tutorial").style.display = "block"
}
document.querySelector(".tutorial").addEventListener("click" ,function(){
    document.querySelector(".tutorial").style.top="100vh"
    // document.querySelector(".tutorial").style.display = "none"
})