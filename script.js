gsap.to(".page3 h1", {
    transform: "translateX(-40%)",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 15%",
        end: "top -100%",
        scrub: 2,
        pin: true
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

tl.to(".sidebar", {
    right: 0,
    duration: 0.5
})
tl.from(".sidebar .animate", {
    x: 150,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0,

})
tl.from(".sidebar i", {
    opacity: 0
})
tl.pause()

menu.addEventListener("click", function () {
    tl.play()
})
cross.addEventListener("click", function () {
    tl.reverse()
})

var t2 = gsap.timeline()

t2.from(".nav .items-left,.nav .items-right ", {
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: 0.1
})



function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.onload = function () {
    const animateBtn = document.querySelector('.btn');
    const animateclose = document.querySelector('.close');
    const box = document.querySelector('.box');

    if (animateBtn && animateclose && box) {
        animateBtn.addEventListener('click', function (e) {
            e.preventDefault();
            box.classList.toggle('animated');
        });
        animateclose.addEventListener('click', function (e) {
            e.preventDefault();
            box.classList.toggle('animated');
        });
    } else {
        console.error("Required elements not found in the DOM.");
    }
};

function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        number: document.querySelector("#number").value,
        message: document.querySelector("#message").value,
    };


    emailjs.send("service_wi1yp0e", "template_dian0yk", templateParams)
        .then(() => alert("email sent!").catch(() => alert("email not sent")));
}

// function startLoader(){
//     let counterElement = document.querySelector(".counter");
//     let currentValue = 0;

//     function updateCounter(){
//         if(currentValue === 100){
//             return; 
//         }

//         currentValue += Math.floor(Math.random() *10)+1;
//          if(currentValue>100){
//             currentValue = 100;
//          }

//          counterElement.textContent = currentValue;

//          let delay = Math.floor(Math.random()*200)+50;
//          setTimeout(updateCounter,delay);
//     }
//     updateCounter();
// }
// startLoader();

gsap.to(".counter", {
    delay: 3.5,
    opacity: 0,
})

gsap.to(".bar", {
    delay: 3.5,
    height: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power4.inOut"
})

CustomEase.create("cubic", "0.83,0,0.17,1");
let isAnimating = false;

function splitTextIntoSpans(selector) {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text.split("").map(function (char) {
            return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
            .join("");
        element.innerHTML = splitText;
    });
}

function initializeCards() {
    let cards = Array.from(document.querySelectorAll(".card2"));
    gsap.to(cards, {
        y: (i) => -15 + 15 * i + "%",
        z: (i) => 15 * i,
        duration: 1,
        ease: "cubic",
        stagger: -0.1,
    });
}

document.addEventListener("DOMContentLoaded", function () {
    splitTextIntoSpans(".copy h1");
    initializeCards();

    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider2 .card2:last-child h1 span", { y: 0 });
});

document.addEventListener("click", function () {
    if (isAnimating) return;

    isAnimating = true;

    let slider = document.querySelector(".slider2");
    let cards = Array.from(slider.querySelectorAll(".card2"));
    let lastCard = cards.pop();
    let nextCard = cards[cards.length - 1];

    gsap.to(lastCard.querySelectorAll("h1 span"), {
        y: 200,
        duration: 0.75,
        ease: "cubic"
    });

    gsap.to(lastCard, {
        y: "+=150%",
        duration: 0.75,
        ease: "cubic",
        onComplete: () => {
            slider.prepend(lastCard);
            initializeCards();
            gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });

            setTimeout(() => {
                isAnimating = false;
            }, 1000)
        },
    });

    gsap.to(nextCard.querySelectorAll("h1 span"), {
        y: 0,
        duration: 1,
        ease: "cubic",
        stagger: 0.05,
    });
});


function scrollToContact() {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
}
