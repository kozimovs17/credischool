let body = document.querySelector("body")
let lines = document.querySelector(".lines");
let navbar = document.querySelector(".navbar");
let btns = document.querySelector(".btns");

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

let a = document.querySelectorAll("a")
console.log(a);

a.forEach((item) =>{
    item.addEventListener("click", () =>{
        if(item.dataset.link == "home"){
            a[0].style.color = "#030F4B"
            a[5].style.color = "#030F4B"
            a[1].style.color = "#808396"
            a[2].style.color = "#808396"
            a[3].style.color = "#808396"
            a[4].style.color = "#808396"
            a[6].style.color = "#808396"
            a[7].style.color = "#808396"
            a[8].style.color = "#808396"
            a[9].style.color = "#808396"
        }
        if(item.dataset.link == "campus"){
            a[0].style.color = "#808396"
            a[1].style.color = "#030F4B"
            a[6].style.color = "#030F4B"
            a[2].style.color = "#808396"
            a[3].style.color = "#808396"
            a[4].style.color = "#808396"
            a[5].style.color = "#808396"
            a[7].style.color = "#808396"
            a[8].style.color = "#808396"
            a[9].style.color = "#808396"
        }
        if(item.dataset.link == "education"){
            a[0].style.color = "#808396"
            a[1].style.color = "#808396"
            a[2].style.color = "#030F4B"
            a[7].style.color = "#030F4B"
            a[3].style.color = "#808396"
            a[4].style.color = "#808396"
            a[5].style.color = "#808396"
            a[6].style.color = "#808396"
            a[8].style.color = "#808396"
            a[9].style.color = "#808396"
        }
        if(item.dataset.link == "alumni"){
            a[0].style.color = "#808396"
            a[1].style.color = "#808396"
            a[2].style.color = "#808396"
            a[3].style.color = "#030F4B"
            a[8].style.color = "#030F4B"
            a[4].style.color = "#808396"
            a[5].style.color = "#808396"
            a[6].style.color = "#808396"
            a[7].style.color = "#808396"
            a[9].style.color = "#808396"
        }
        if(item.dataset.link == "about"){
            a[0].style.color = "#808396"
            a[1].style.color = "#808396"
            a[2].style.color = "#808396"
            a[3].style.color = "#808396"
            a[9].style.color = "#030F4B"
            a[4].style.color = "#030F4B"
            a[5].style.color = "#808396"
            a[6].style.color = "#808396"
            a[7].style.color = "#808396"
            a[8].style.color = "#808396"
        }
    })
});

let den = document.querySelector(".den");
let quyosh = document.querySelector(".kun");
let luna = document.querySelector(".noch");
let x = 0;

den.addEventListener("click", () =>{
    x++;
    if(x % 2 !=0){
        den.style.justifyContent = "flex-end";
        luna.style.display = "block";
        quyosh.style.display = "none";
        body.style.backgroundColor = "#423b3b";
    } else{
        den.style.justifyContent = "flex-start";
        body.style.backgroundColor = "#fff";        
        luna.style.display = "none";
        quyosh.style.display = "block";
    }
})