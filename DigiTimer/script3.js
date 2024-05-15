var clock=document.getElementById("clock");
clock.style.color="aqua";
clock.style.fontWeight="bold";
clock.style.fontSize="28px";
clock.style.marginTop="30px";

setInterval(()=>{
    var date=new Date();
    clock.innerText=date.toLocaleString();
},1000);
