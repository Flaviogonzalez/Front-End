gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',

    smooth: 5,
});