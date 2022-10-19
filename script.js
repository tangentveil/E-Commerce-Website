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


// Features

const features = [
  {
    id: 1,
    title: "Free Shipping",
    img: "./img/features/f1.png",
  },
  {
    id: 2,
    itle: "Online Order",
    img: "./img/features/f2.png",
  },
  {
    id: 3,
    title: "Save Money",
    img: "./img/features/f3.png",
  },
  {
    id: 4,
    title: "Promotions",
    img: "./img/features/f4.png",
  },
  {
    id: 5,
    title: "happy Sell",
    img: "./img/features/f5.png",
  },
  {
    id: 6,
    title: "F24/7 Support",
    img: "./img/features/f6.png",
  },
];


const featureSection = document.getElementById('feature');

window.addEventListener('DOMContentLoaded', ()=>{
    displayFeatures(features);
});

function displayFeatures(items){
    let displayFeatureBox = items.map((item)=>{
        return `<div class="fe-box">
        <img src=${item.img} alt="">
        <h6>${item.title}</h6>
        </div>`;
    });

    displayFeatureBox = displayFeatureBox.join("");
    featureSection.innerHTML = displayFeatureBox;
}