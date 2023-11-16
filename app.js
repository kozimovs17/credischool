let lines = document.querySelector(".lines");
let navbar = document.querySelector(".navbar");
let btns = document.querySelector(".btns");
let ul = document.querySelectorAll("ul")
let n = 0;
lines.addEventListener("click", () =>{
    n++;
    if(n % 2 !=0){
        navbar.style.display = "none";
        btns.style.display = "none";

    }else{
        navbar.style.display = "block";
        btns.style.display = "block";  
    }
})
