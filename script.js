gsap.from("#page1 h1, #video-container", {
    scale: 0.9,
    opacity:0,
    duration: 1,
    stagger: 0.2,
})



gsap.to("#links",{
    y: "-100%",
    opacity: 0,
    scrollTrigger:{
       scrolller: "#main",
       trigger:"page1",
       start: "top 0",
       end: "top -5%",
       scrub: true 
    }
})

gsap.to("#nav-part1 svg", {
    y: "-100%",
    duration:1,
    scrollTrigger:{
        scrolller: "#main",
        trigger:"page1",
        start: "top 0",
        end: "top -5%",
        scrub: true 
     }
})

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

swiper();

document.querySelector("#page3 #elem1 #e").addEventListener("mouseenter", function(){
    gsap.to("#page3 #elem1 #w", {
        scale: 1,
    })
})

document.querySelector("#page3 #elem1 #w").addEventListener("mouseleave", function(){
    gsap.to("#page3 #elem1 #w", {
        scale: 0,
    })
})

document.querySelector("#page3 #elem2 #t").addEventListener("mouseenter", function(){
    gsap.to("#page3 #elem2 #y", {
        scale: 1,
    })
})

document.querySelector("#page3 #elem2 #y").addEventListener("mouseleave", function(){
    gsap.to("#page3 #elem2 #y", {
        scale: 0,
    })
})

document.querySelector("#page3 #elem3 #g").addEventListener("mouseenter", function(){
    gsap.to("#page3 #elem3 #h", {
        scale: 1,
    })
})

document.querySelector("#page3 #elem3 #h").addEventListener("mouseleave", function(){
    gsap.to("#page3 #elem3 #h", {
        scale: 0,
    })
})