
const national = document.querySelector('#nationalChakra')
const navLeft = document.querySelector('#nav-left')
const navRight = document.querySelector('#nav-right')
const cursor = document.querySelector('#mouse-follower')
const cursorParent = document.querySelector('#parent');
const pastParent = document.querySelector("past-journey")

const pastData = [
    {
        name: 'Mahatma Gandhi',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_F_nLbFmr5xy_YL8Q7CLRr3x381EkYneqsg&s',
        dob: '1869-1948',
        description: "Mahatma Gandhi was born on October 2, 1869. He was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule"
    },
    {
        name: 'Mahatma Gandhi',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_F_nLbFmr5xy_YL8Q7CLRr3x381EkYneqsg&s',
        dob: '1869-1948',
        description: "Mahatma Gandhi was born on October 2, 1869. He was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule"
    },
    {
        name: 'Mahatma Gandhi',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_F_nLbFmr5xy_YL8Q7CLRr3x381EkYneqsg&s',
        dob: '1869-1948',
        description: "Mahatma Gandhi was born on October 2, 1869. He was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule"
    },
    {
        name: 'Mahatma Gandhi',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_F_nLbFmr5xy_YL8Q7CLRr3x381EkYneqsg&s',
        dob: '1869-1948',
        description: "Mahatma Gandhi was born on October 2, 1869. He was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule"
    },
]





cursorParent.addEventListener('mousemove', (theBoys) => {
    gsap.to(cursor, {
        x: theBoys.x,
        y: theBoys.y,
        ease: 'sticky',
        opacity: 1,
    })
})




gsap.fromTo(national, {
    opacity: 0,
    duration: 1,
    scale: 1.5,
}, {
    opacity: 1,
    rotate: 360,
    duration: 1.6,
    repeat: -1,

})

gsap.from(navLeft, {
    opacity: 0,
    x: 100,
    duration: 1.5,
    ease: 'easeInOut',
})

gsap.from(navRight, {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: 'easeInOut',
})