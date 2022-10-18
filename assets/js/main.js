let x=document.querySelector("p")

let counter=0;





let int;
int=setInterval(()=>{
  counter++;
  x.innerText=counter
},10)

let str=document.getElementById("str");
str.addEventListener('click',e=>{
  int=setInterval(()=>{
    counter++;
    x.innerText=counter;
  },1000)
})


let stp=document.getElementById("stp");
stp.addEventListener('click', e=>{
  clearInterval(int)
})
let reset=document.getElementById("rset")
reset.addEventListener('click',e=>{
  counter=0
})