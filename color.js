// ****************** TOGGLE STYLE SWICHER

const styleToggle = document.querySelector(".style-swicher-toggler");
styleToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

const aletrnativeStyle = document.querySelectorAll(".alternate-style");
function setactivateStyle(color) {
  aletrnativeStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// ** dark mood


const dayNight = document.querySelector(".day-night")
const main = document.querySelector(".main-container")
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun"); 
    dayNight.querySelector("i").classList.toggle("fa-moon");
    // main.querySelector("i").classList.toggle("main-container-2");

    document.body.classList.toggle("dark")
  
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains(" ")){
        dayNight.querySelector("i").classList.add("fa-sun");
        // document.body.classList.remove("dark")
        // main.classList.add("main-container-c")
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
        // document.body.classList.add("dark")
        // main.classList.remove("main-container-c")

        
    }
})


// custome cursore

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
