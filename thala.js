document.querySelector(".go").addEventListener("click", getVal)
function popUp(){
    document.querySelector("#end-sec").style.display="block";
    document.querySelector("#bole").play();
    document.querySelector("#name-inp").style.display="none";


    console.log("thala for a reason");
}
setInterval(function () {let date = new Date();
    let min =date.getMinutes();
    if(min % 10 == 7){
        popUp();
    }
    console.log(min);}, 30000);

let reason;

function getVal(){
   
   
    let text = document.querySelector("#text").value;
    console.log(text);
    let num = isThala(text);
    document.querySelector(".reason").innerHTML=reason;
    console.log(num);
    document.querySelector("#inbet").style.top= '0%';
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
            reason = texts.split("").join("+") + "=7"
            console.log(reason);
            return true;
        }
    }
    
    if(num){
       popUp();
    }
    if(!num){
        //load lvl1
        loadScript("level2.js")
    }

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
    document.querySelector("#inbet").style.top= '0%';
    loadScript("level2.js")
} 

