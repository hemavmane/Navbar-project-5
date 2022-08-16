let btn =document.getElementById("sidebar_btn")
let main = document.querySelector("main")
let btn2 =document.querySelector(".close")
let btn3 =document.querySelector(".happy")

btn.addEventListener("click",()=>{
    main.classList.toggle("bar")
})

btn2.addEventListener("click",()=>{
main.classList.toggle("bar")
})


