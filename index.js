gsap.from("#page1 #box",{
    opacity:0,
    delay:1,
    duration:0.8,
})

gsap.from("#page2 h1",{
    transform:"translate(100%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:false,
        start:"top 10%",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})



