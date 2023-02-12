burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')
line = document.querySelector('.line')
line3 = document.querySelector('.line3')
top_logo_resp = document.querySelector('.top_logo_resp')
fold_class_resp = document.querySelector('.fold_class_resp')
joinBtn1 = document.querySelector('.joinBtn1')
joinBtn2 = document.querySelector('.joinBtn2')
joinBtn3 = document.querySelector('.joinBtn3')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp')
    navList.classList.toggle('v-class-resp')
    rightNav.classList.toggle('v-class-resp')
    burger.classList.toggle('burger-resp')
    line.classList.toggle('line-resp')
    line3.classList.toggle('line-resp')
    top_logo_resp.classList.toggle('.leftNav')
})

joinBtn1.addEventListener('click', () => {
    fold_class_resp.classList.toggle('unfold')
})
joinBtn2.addEventListener('click', () => {
    fold_class_resp.classList.toggle('unfold')
})
joinBtn3.addEventListener('click', () => {
    fold_class_resp.classList.toggle('unfold')
})