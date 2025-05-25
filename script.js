gsap.to(".page3 h1",{
    transform:"translateX(-100%)",
    duration:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 15%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

gsap.from(".logo", {
    y: "55vh",
    scale: 7,
    yPercent: -50,
    xPercent: -50,
    scrollTrigger: {
        trigger: ".content",
        markers: false,
        scroller: "body",
        start: "top bottom",
        endtrigger: ".content",
        end: "top 10%",
        scrub: true
    }
})



var menu = document.querySelector(".menu-button")
var cross = document.querySelector(".cross-button")
var tl = gsap.timeline()

tl.to(".sidebar",{
    right:0,
    duration:0.5
})
tl.from(".sidebar .animate",{
    x:150,
    duration:0.5,
    stagger:0.1,
    opacity:0,
    
})
tl.from(".sidebar i",{
    opacity:0
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})

var t2 = gsap.timeline()

t2.from(".nav .items-left,.nav .items-right ",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.1
})



function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.onload = function() {
    const animateBtn = document.querySelector('.btn');
    const animateclose = document.querySelector('.close');
    const box = document.querySelector('.box');

    if (animateBtn && animateclose && box) {
        animateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            box.classList.toggle('animated');
        });
        animateclose.addEventListener('click', function(e) {
            e.preventDefault();
            box.classList.toggle('animated');
        });
    } else {
        console.error("Required elements not found in the DOM.");
    }
};

function sendEmail(){
    const templateParams = {
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        number:document.querySelector("#number").value,
        message:document.querySelector("#message").value,
    };


    emailjs.send("service_0b8rmha", "template_670pgsf", templateParams)
    .then(()=> alert("email sent!").catch(()=>alert("email not sent")));
}

function startLoader(){
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter(){
        if(currentValue === 100){
            return; 
        }

        currentValue += Math.floor(Math.random() *10)+1;
         if(currentValue>100){
            currentValue = 100;
         }
        
         counterElement.textContent = currentValue;

         let delay = Math.floor(Math.random()*200)+50;
         setTimeout(updateCounter,delay);
    }
    updateCounter();
}
startLoader();

gsap.to(".counter",{
    delay:3.5,
    opacity:0,
})

gsap.to(".bar",{
    delay:3.5,
    height:0,
    duration:1,
    stagger:0.1,
    ease:"power4.inOut"
})