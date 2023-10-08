var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow"
        console.log("Clicked On");
        flag = 1
    } else {
        bulb.style.backgroundColor = "transparent"
        console.log("Clicked off");
        flag = 0
    }
})

// ---------------------------------------------
// selecting multiple element as a same time

// var h = document.querySelectorAll("h1")
// console.log(h)

// h.forEach(function (e) {
//     console.log(e)
// })



