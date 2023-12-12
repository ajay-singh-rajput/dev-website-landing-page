var devDetailsDiv = document.querySelector(".devDetailsDiv");
var dp = document.querySelector(".dp");
var devName = document.querySelector(".devName");
var devRole = document.querySelector(".devRole");
var devContainer = document.querySelector(".devContainer");
var bgColor = "#FFB9CE";

var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var card4 = document.querySelector(".card4");
var closeDIv = document.querySelector(".close");

function visible(img, name, role, color){
    devName.innerHTML = name;
    devRole.innerHTML = role;
    devRole.style.color = "white"
    dp.style.background = "url("+img+")";
    devContainer.style.background = color;
    devDetailsDiv.style.transform = "translateX(100%)"
    dp.style.backgroundSize = "cover";
    dp.style.backgroundColor = "grey"

}

card1.addEventListener("click",function(){
    visible("https://www.pngitem.com/pimgs/b/286-2868427_smiling-png.png","ANNA DEAN","React Engineer", "#FFB9CE");
});
card2.addEventListener("click",function(){
    visible("https://www.pngkit.com/png/full/340-3400418_smiling-man-guy-smiling-png.png","CHRIS MEZY","Data Engineer", "#CAD5D4");
});
card3.addEventListener("click",function(){
    visible("https://www.pngitem.com/pimgs/b/90-907434_angry-woman-png.png","LESLIE SCHNIDER","Backend Devloper", "#E4DCD3");
});
card4.addEventListener("click",function(){
    visible("toppng.com-handsome-businessman-smile-businessman-smiling-449x662.png","JIM BRICKTON","AI Specialist", "#FFCA31");
});

closeDIv.addEventListener("click", function(){
    devDetailsDiv.style.transform = "translateX(0%)"
})

