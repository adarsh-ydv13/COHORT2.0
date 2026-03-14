var box=document.querySelector('#box');
var btn=document.querySelector('button');

btn.addEventListener('click',function(){
    let a=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let c=Math.floor(Math.random()*255);

    box.style.backgroundColor=`rgb(${a},${b},${c})`;
})     