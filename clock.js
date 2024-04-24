const selectMenu=document.querySelectorAll("select")
const optionList=document.querySelectorAll("option")
const H1Time=document.querySelector("h1");
const setAlarmBtn=document.querySelector("button");
const maincont=document.querySelector(".main-container");
let alarmTime;
let ringtone=new Audio("Alarm_Clock_Ringtone(48k).mp3")
let isalarmset=false;


for(var i=12;i>0;i--){
    i=i<10? "0"+i:i
    let option=`<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for( let j=59;j>0;j--){
    j=j<10? "0"+j:j
    let option=`<option value="${j}">${j}</option>`;

    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)

}
for(let k=2;k>0;k--){
   var ampm=k<2? "Am":"Pm"
    let option=`<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option)

}

 setInterval(()=>{
    let date=new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds()

    if(h>=12){
        h=h-12;
        ampm="Pm";
    }
    h=h==0?h=12:h;
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
H1Time.innerText=`${h}:${m} ${s} ${ampm}`;
if(alarmTime==`${h}:${m} ${ampm}`){
    ringtone.play();
    ringtone.loop=true;
    

}
},1000);

function setAlarm(){
    if(isalarmset){
        alarmTime="";
        ringtone.pause();
        maincont.classList.remove("disable");
    setAlarmBtn.innerText="set alarm";
    return isalarmset=false;
    }
     var time=`${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    
    if(time.includes("hour") || time.includes("minute") || time.includes("AmPm")){
        return alert("please select valid time");
        
    }
    isalarmset=true;
    alarmTime=time;
    maincont.classList.add("disable");
    setAlarmBtn.innerText="clear alarm";
    
}
setAlarmBtn.addEventListener("click",setAlarm);
