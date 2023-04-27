// var tl2 = gsap.timeline({
    
// })
gsap.to("nav-bar", {
    color: "#fff",
    background: " rgba(25, 20, 20, 0.42)",
    transition: "1s",

    scrollTrigger: {
        scroll: ".main",
        trigger: "nav-bar",
        start: "bottom 1%",
        end: "bottom 0%",
        scrub: true,
    }
})
