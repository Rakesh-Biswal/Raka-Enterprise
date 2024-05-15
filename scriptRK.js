
const service = document.querySelectorAll(".Service");
var service5=document.getElementById("service5");
service5.addEventListener("click",()=>{
    alert("This Survice will Implemented Very Soon...");
});
service.forEach((e) => {
    e.addEventListener("click", function () {
        const url = this.getAttribute("data-url");
        window.open(url);
        
    });
});
