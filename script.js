const navbar = document.querySelector('#navbar');
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');


toggleBtn.addEventListener('click', ()=>{
    navbar.classList.add('show-navbar');
});

closeBtn.addEventListener('click', ()=>{
    navbar.classList.remove('show-navbar');
});