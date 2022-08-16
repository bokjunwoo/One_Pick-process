// GSAP
gsap.registerPlugin(ScrollTrigger);

//scroll trigger
const boxScroll = gsap.timeline();

boxScroll.to(".box1", {
    duration: 1,
    scale: 3,
    x: 300,
    y: 500,
}).to(".box2", {
    duration: 1,
    scale: 3,
    x: 500,
    y: 200,
});

ScrollTrigger.create({
    animation: boxScroll,
    trigger: ".section_trigger",
    start: "top top",
    end: "+=1000",
    scrub: 2,
    markers: true,
    pin: true,
});

// 영상재생
const playMovie  = document.querySelector(".mr_movie");

playMovie.addEventListener('click', function(){
    playMovie.requestFullscreen();
    playMovie.play();
})