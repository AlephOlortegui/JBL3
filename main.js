const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const lis = document.querySelectorAll('.nav .nav_link')
const body = document.querySelector('body')

const checkbox = document.getElementById('checkbox');
const products = document.querySelector('.products');

function clickMenu() {
    if(window.innerWidth < 768){
        burger.classList.toggle('active')
        nav.classList.toggle('active')
        lis.forEach((li,index) =>{
            //if the animation exits – reboot it
            if(li.style.animation){
                li.style.animation = '';
            } //otherwise set the animation
            else{
                li.style.animation = `showLi 0.5s ease forwards ${index/5 + 0.3}s`
            }
        })
        body.classList.toggle('stop-scrolling')
    }
}

burger.addEventListener('click', clickMenu)
lis.forEach(li => li.addEventListener('click',clickMenu));

checkbox.addEventListener('click',() => products.classList.toggle('active'))

window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 768){
        burger.classList.remove('active')
        nav.classList.remove('active')
        body.classList.remove('stop-scrolling')
        lis.forEach(li => li.style.animation = '')
    }
})

const copyRight = document.getElementById('copy_right')
copyRight.innerHTML = `&copy; JBL Speakers - ${new Date().getFullYear()}`;