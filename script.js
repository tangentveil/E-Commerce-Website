const navbar = document.querySelector("#navbar");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const header = document.getElementById("header");
const topLink = document.querySelector(".top-link");

//**************** */ toggle button

toggleBtn.addEventListener("click", () => {
  navbar.classList.add("show-navbar");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("show-navbar");
});

//****************** */ Fixed header

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height;

  // console.log(navheight);

  if (scrollHeight > 19) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }

  // back to top functionality
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//*********************** */ Features

const features = [
  {
    id: 1,
    title: "Free Shipping",
    img: "./img/features/f1.png",
  },
  {
    id: 2,
    title: "Online Order",
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

const featureSection = document.getElementById("feature");

window.addEventListener("DOMContentLoaded", () => {
  displayFeatures(features);
});

function displayFeatures(items) {
  let displayFeatureBox = items.map((item) => {
    return `<div class="fe-box">
        <img src=${item.img} alt="">
        <h6>${item.title}</h6>
        </div>`;
  });

  displayFeatureBox = displayFeatureBox.join("");
  featureSection.innerHTML = displayFeatureBox;
}

//********************** */ Featured Product

const products = [
  {
    id: 1,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/f1.jpg",
  },
  {
    id: 2,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/f2.jpg",
  },
  {
    id: 3,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/f3.jpg",
  },
  {
    id: 4,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/f4.jpg",
  },
  {
    id: 5,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/f5.jpg",
  },
  {
    id: 6,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/f6.jpg",
  },
  {
    id: 7,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/f7.jpg",
  },
  {
    id: 8,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/f8.jpg",
  },
];

const Newproducts = [
  {
    id: 1,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/n1.jpg",
  },
  {
    id: 2,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/n2.jpg",
  },
  {
    id: 3,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/n3.jpg",
  },
  {
    id: 4,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/n4.jpg",
  },
  {
    id: 5,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/n5.jpg",
  },
  {
    id: 6,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/n6.jpg",
  },
  {
    id: 7,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/n7.jpg",
  },
  {
    id: 8,
    title: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    img: "./img/products/n8.jpg",
  },
];

const productContainer = document.querySelector(".pro-container");
const newArrivalContainer = document.querySelector(".newArrival-Container");

window.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  displayProducts(Newproducts);
});

function displayProducts(items) {
  let displayProduct = items.map((item) => {
    return `<div class="pro">
        <img src=${item.img} alt="">
        <div class="des">
            <span>${item.brand}</span>
            <h5>${item.title}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$78</h4>
        </div>
        <a href="#">
            <i class="fal fa-shopping-cart cart"></i>
        </a>
    </div>`;
  });
  displayProduct = displayProduct.join("");
  productContainer.innerHTML = displayProduct;
  newArrivalContainer.innerHTML = displayProduct;
}