let user = document.getElementById("user")
let name = document.getElementById("name")
let div_name = document.getElementById("div_name")

name.addEventListener("click", function(){
    let first = document.createElement("input")
    first.textContent = user
    div_name.appendChild(first)
})

let email = document.getElementById("email")
let mail = document.getElementById("mail")
let div_email = document.getElementById("div_email")

mail.addEventListener("click", function(){
    let second = document.createElement("input")
    second.textContent = email
    div_email.appendChild(second)
})

let pass = document.getElementById("pass")
let passs = document.getElementById("passs")
let div_pass = document.getElementById("div_pass")

passs.addEventListener("click", function(){
    let third = document.createElement("input")
    third.textContent = pass
    div_pass.appendChild(third)
})
let tima = document.getElementById("tima")
let repeat = document.getElementById("repeat")
let div_repeat = document.getElementById("div_repeat")

repeat.addEventListener("click", function(){
    let fourth = document.createElement("input")
    fourth.textContent = tima
    div_repeat.appendChild(fourth)
})



