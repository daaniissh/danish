// *** typing animation
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web developer","Mobile App dev",""],
    typeSpeed:100,
    backSpeed:60,
    loop:true

})


const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length
for(let i=0;i<totalNavList;i++){
    // console.log(i);
    const a= navList[i].querySelector("a")
    console.log(a);
    a.addEventListener("click",function(){
        for(let j = 0;j<totalNavList;j++){
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
if(window.innerWidth < 1200){
    navtoggl()
}
        
    })
}
function showSection(e){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active")
    }
    const target  = e.getAttribute("href").split("#")[1];
    document.querySelector("#"+ target).classList.add("active")
} 

const navToglerBtn = document.querySelector(".nav-toggle")
aside = document.querySelector(".aside")
navToglerBtn.addEventListener("click",()=>{
    navtoggl()
})

function navtoggl(){
    aside.classList.toggle("open")
    navToglerBtn.classList.toggle("open")
    for(let i =0;i<totalSection;i++){
     allSection[i].classList.toggle("opan")   
    }
}