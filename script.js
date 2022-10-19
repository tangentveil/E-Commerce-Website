const navbar = document.querySelector('#navbar');
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const header = document.getElementById('header');
const topLink = document.querySelector('.top-link');


toggleBtn.addEventListener('click', ()=>{
    navbar.classList.add('show-navbar');
});

closeBtn.addEventListener('click', ()=>{
    navbar.classList.remove('show-navbar');
});


// Fixed header
window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    const navheight = navbar.getBoundingClientRect().height;

    // console.log(navheight);

    if(scrollHeight > 19){
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }


    // back to top functionality
    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});