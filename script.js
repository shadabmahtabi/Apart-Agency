animation = () => {
    // ******************* GSAP Animations *******************
    gsap.from("nav", {
        x: "-100%",
        duration: 2,
        ease: Expo.easeInOut
    })
    gsap.from(".animate", {
        y: "-100%",
        opacity: 0,
        duration: .5,
        delay: 2,
        stagger: .05
    })
    gsap.from("footer", {
        x: "100%",
        duration: 2,
        ease: Expo.easeInOut
    })
    gsap.from(".lineAnimate", {
        width: ".1vw",
        scale: 0,
        duration: 1,
        delay: 2,
        onComplete: ()=>{
            document.querySelector("#vLine").style.width = ".05vw";
            document.querySelector("#hLine").style.height = ".05vw";
        }
    })
    gsap.from(".circle", {
        opacity: 0,
        duration: .5,
        delay: 3
    })
}
animation();

// ******************* Circles moves on cursor *******************
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let circle4 = document.querySelector("#circle4");
let content = document.querySelector(".content");
// console.log(content.getBoundingClientRect().height)
const totalWidth = content.getBoundingClientRect().width;
const totalHeight = content.getBoundingClientRect().height;

moveIn = () => {
    content.addEventListener("mousemove", (dets) => {
        console.log((dets.x - (totalWidth / 2)) / (totalWidth / 100))
        circle1.style.transform = `translate(${(dets.x - (totalWidth / 2)) / (totalWidth / 100)}%,${((dets.y - (totalHeight / 2)) - 42) / (totalHeight / 100)}%)`
        circle2.style.transform = `translate(${-(dets.x - (totalWidth / 2)) / (totalWidth / 100)}%,${((dets.y - (totalHeight / 2)) - 42) / (totalHeight / 100)}%)`
        circle3.style.transform = `translate(${(dets.x - (totalWidth / 2)) / (totalWidth / 100)}%,${-((dets.y - (totalHeight / 2)) - 42) / (totalHeight / 100)}%)`
        circle4.style.transform = `translate(${-(dets.x - (totalWidth / 2)) / (totalWidth / 100)}%,${-((dets.y - (totalHeight / 2)) - 42) / (totalHeight / 100)}%)`
    })
}
moveOut = () => {
    content.addEventListener("mouseleave", () => {
        circle1.style.transform = `translate(0%,0%)`
        circle2.style.transform = `translate(0%,0%)`
        circle3.style.transform = `translate(0%,0%)`
        circle4.style.transform = `translate(0%,0%)`
    })
}
moveIn();
moveOut();

window.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.top = `${dets.y}px`
    document.querySelector("#cursor").style.left = `${dets.x}px`
    document.querySelector("#cursor").style.transform = `translate(-50%, -50%)`
    // document.querySelector("#cursor").style.cursor = "none"
});

// window.addEventListener("mousemove", function (dets) {
//     document.querySelector("#main").style.cursor = "none"
// });

document.querySelectorAll("a")
    .forEach(function (elem) {
        elem.addEventListener("mousemove", function () {
            document.querySelector("#cursor").style.width = "5vw"
            document.querySelector("#cursor").style.height = "5vw"
            document.querySelector("#cursor").style.opacity = "0.5"
        })
    })

document.querySelectorAll("a")
    .forEach(function (elem) {
        elem.addEventListener("mouseout", function () {
            document.querySelector("#cursor").style.width = "2vw"
            document.querySelector("#cursor").style.height = "2vw"
            document.querySelector("#cursor").style.opacity = "1"
        })
    })
