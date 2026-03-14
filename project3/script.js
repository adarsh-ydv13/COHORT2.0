let box=document.querySelector('.box');
let button=document.querySelector('button');
let body=document.querySelector('body');

let teams=[
{
    team:"csk",
    primary:"yellow",
    secondary:"white"
},
{
    team:"rcb",
    primary:"red",
    secondary:"black"
},
{
    team:"mi",
    primary:"blue",
    secondary:"gold"
}
]

button.addEventListener('click',function(){
    let randomm=Math.floor(Math.random()*3);
    box.style.backgroundColor=teams[randomm].primary;
    box.innerHTML=teams[randomm].team.toUpperCase();
    body.style.backgroundColor=teams[randomm].secondary;

})