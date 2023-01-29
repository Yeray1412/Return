const popUp = document.querySelector('.popUp');
const navbarToggler = document.querySelector('.navbar-toggler');
const xSign = document.querySelector('.xSign');
const damnUl =document.querySelector('.damnUl');
const port = document.querySelector('#Port');
const About = document.querySelector('#About');
const Cont = document.querySelector('#Cont');

navbarToggler.addEventListener('click',()=> {
    popUp.style.transform = 'translateX(0)'
    document.body.classList.add('stopScroll')
})

xSign.addEventListener('click',()=> {
    popUp.style.transform = "translateX(-100%)"
    document.body.classList.remove('stopScroll')
})

for(const li of damnUl.children) {
    if(li.textContent.includes('Portfolio')) {
        li.addEventListener('click',()=> {
            xSign.click()
            port.scrollIntoView({behavior:"smooth"});
        })
    }

    if(li.textContent.includes('About')) {
        li.addEventListener('click',()=> {
            xSign.click()
            About.scrollIntoView({behavior:"smooth"});
        })
    }

    if(li.textContent.includes('Contact')) {
        li.addEventListener('click',()=> {
            xSign.click()
            Cont.scrollIntoView({behavior:"smooth"});
        })
    }
}

