
const national = document.querySelector('#nationalChakra')
const navLeft = document.querySelector('#nav-left')
const navRight = document.querySelector('#nav-right')
const cursor = document.querySelector('#mouse-follower')
const cursorParent = document.querySelector('#parent');




gsap.to()


parent.addEventListener('mousemove', (theBoys) => {
    console.log(theBoys);
})




gsap.fromTo(national , {
    opacity: 0,
    duration: 1, 
    scale: 1.5,
}, {
    opacity: 1,
    rotate: 360,
    duration: 1.6,
    repeat: -1,

})

gsap.from (navLeft, {
    opacity: 0,
    x: 100,
    duration: 1.5,
    ease: 'easeInOut',
})

gsap.from (navRight, {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: 'easeInOut',
})