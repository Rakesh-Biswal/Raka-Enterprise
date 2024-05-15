const image=document.querySelectorAll(".image");
image.forEach((e) => {
    e.addEventListener("click", function(){
        const color=this.getAttribute("data-color");
        document.body.style.backgroundColor=color;
    });
}); 