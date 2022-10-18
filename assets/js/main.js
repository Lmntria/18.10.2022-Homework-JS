let milSec=document.getElementById("milSec")
let sec=document.getElementById("sec")
let min=document.getElementById("min")
let hour=document.getElementById("hour")

let mSecond=0;
let second=0;
let deq=0
let saat=0




let int;
function timer() {
  int=setInterval(()=>{
    mSecond++;
  
  if (mSecond<=9) {
    milSec.innerText='0'+mSecond
  }
  if(mSecond>9) {
    milSec.innerText=mSecond
  }
  if(mSecond>99) {
    second++;
    sec.innerText='0' + second
    mSecond=0
    milSec.innerHTML='0'+ mSecond
  }
  if(second>9) {
    sec.innerText=second
  }
  if(second>59) {
    deq++;
    min.innerText='0' + deq
    second=0
    sec.innerHTML='0'+ second
  }
  if(min>9) {
    sec.innerText=second
  }
  if(min>59) {
    saat++;
    min.innerText='0' + saat
    hour=0
    min.innerHTML='0'+ deq
  }
  },0.1)
}



let str=document.getElementById("str");
str.addEventListener('click',e=>{
  clearInterval(int)
  int = setInterval(()=>{
      second++;
      aTag.innerText = second;
  },1000)
})


let stp=document.getElementById("stp");
stp.addEventListener('click', e=>{
  clearInterval(int)
})
let reset=document.getElementById("rset")
reset.addEventListener('click',e=>{
  milSec.innerText='00'
  sec.innerText='00'
})


timer()


//TODO-LIST JS


// let addbtn = document.getElementById('todo');
//         addbtn.addEventListener('click',function(){
//             let datetime = this.previousElementSibling;
//             let task = datetime.previousElementSibling;
//             datetime.style.borderColor = '#ced4da';
//             task.style.borderColor = '#ced4da';
//             if (task.value.trim().length > 0 && datetime.value.trim().length > 0) {
//                 let list = document.getElementById('list');
//                 let date = datetime.value.split('T')[0];
//                 let time = datetime.value.split('T')[1];
//                 list.innerHTML+=`<li class="list-group-item">
//                     <div class="row align-items-center">
//                         <p class="col-md-4 m-0">${task.value}</p>
//                         <p class="col-md-4 m-0">${date} | ${time}</p>
//                         <div class="col-md-4 row justify-content-between">
//                             <button onclick="changeColor(this)" class="btn btn-success done-btn col-md-5">Done</button>
//                             <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Delete</button>
//                         </div>
//                     </div>
//                 </li>`
//                 datetime.value = "";
//                 task.value="";
//                 checkAllItem();

//             }
//             else{
//                 datetime.style.borderColor = 'red';
//                 task.style.borderColor = 'red';
//             }
//         })

//         function checkAllItem() {
//             let items = document.querySelectorAll(".list-group-item");
//             for (const item of items) {
//                 let datetime = item.children[0].children[1].innerText.split('|');
//                 let result = checkTime(datetime[0],datetime[1])
//                 item.style = 'background-color:'+result+ '!important'
//             }
//         }

//         // setInterval(checkAllItem,1000)
//         // // checkAllItem();

//         function checkTime(taskDate, taskTime) {
//             let dateObj = new Date();
//             let date = dateObj.toLocaleDateString("az").trim();
//             let time = dateObj.toLocaleTimeString().trim();
//             taskDate = taskDate.trim();
//             taskTime = taskTime.trim();
//             if (date == taskDate) {
//                 return '#fff';
//             }
//             else{
//                 date.split('-')
//             }
//             return 'black';
//         }




//         function changeColor(x) {
//           let bg= x.parentElement.parentElement.parentElement
//           console.log(x.parentElement.parentElement.parentElement)
//           bg.style.backgroundColor='#32CD32'
//         }