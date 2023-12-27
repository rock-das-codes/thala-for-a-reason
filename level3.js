document.querySelector("#name-inp").innerHTML=`




`
// initialize kaboom context
kaboom();
        
// add a piece of text at position (120, 80)
loadSprite("bean", "sprites/bean.png")
add([
    text("hello"),
    pos(120, 80),
]);
