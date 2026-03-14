let inner=document.querySelector('.inner');
let btn=document.querySelector('button');
let h2=document.querySelector('H2');
let a=0;

btn.addEventListener('click',function(){
   let time=setInterval(() => {
        inner.style.width=a++ +"%";
        h2.innerHTML=a+'%';
    },30);
    setTimeout(()=>{
    clearInterval(time)
    btn.innerHTML='Downloaded';
    btn.style.opacity=50+'%';
    btn.style.pointerEvents='none';
},3000)
})

