let h1=document.querySelector("h1");
let incbutton=document.querySelector("#inc");
let decbutton=document.querySelector("#dec");
let a=0;


incbutton.addEventListener("click",function(){
    a++;
    h1.innerText=a;
})
decbutton.addEventListener("click",function(){
    a--;
    h1.innerText=a;
})