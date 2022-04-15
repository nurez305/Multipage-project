//CHANGE NAV BAR

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY > 0) 
})


//show/hide faq answe

const faq = document.querySelectorAll('.faq')
faq.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')

        //change icon
        const icon = faq.querySelector('.faq-icon i')

        if (icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus"
        } else{
            icon.className = "fa-solid fa-plus"
        }
    })
})



/////////SHOW/HIDE MENU//////

const menu = document.querySelector('.nav-menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')


menuBtn.addEventListener('click', () =>{
    menu.style.display ='flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none'
})


const closeNav = ()=> {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeNav)