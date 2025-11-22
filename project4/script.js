let main=document.querySelector('main');
let button=document.querySelector('button');

let arr=['adarsh loves adiba','adiba loves adarsh','adarsh and adiba are a perfect match','adarsh is the king','adiba is the queen'];

button.addEventListener('click',function(){
    let h1=document.createElement('h1');
    
    let x=Math.random()*100;
    let y=Math.random()*100;
     let z=Math.random()*200;
     let a=Math.random()*90;
    let random=Math.floor(Math.random()*arr.length);
    h1.innerHTML=arr[random];
    h1.style.fontSize=a+'px';
    h1.style.top=y+'%';
    h1.style.left=x+'%';
    h1.style.rotate=z+'deg';
    h1.style.position='absolute';
    main.appendChild(h1);




})