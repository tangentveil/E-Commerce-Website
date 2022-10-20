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

const productContainer = document.querySelector(".pro-container");

window.addEventListener("DOMContentLoaded", (e) => {
  productContainer.innerHTML = displayProducts(products);
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
  return displayProduct.join("");
}

//********************** */ New Arrival Product

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

const newArrivalContainer = document.querySelector(".newArrival-Container");

window.addEventListener("DOMContentLoaded", (e) => {
  newArrivalContainer.innerHTML = displayProducts(Newproducts);
});

//********************** */ shop Product

const shopProducts = products.concat(Newproducts);
const shopContainer = document.querySelector(".shop-container");

//*************** */ pagination

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();

shopContainer.innerHTML = displayProducts(products);
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

shopContainer.innerHTML = displayProducts(Newproducts);
});

//*********************** */ blog

const blogs = [
  {
    id: 1,
    title: "The Cotton-Jersey Aip-Up Hoodie",
    img: "./img/blog/b1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure magnam maxime officiis possimus fugiat, excepturi sed cupiditate! Natus omnis cum non nisi minima repellendus atque earum id officia exercitationem?",
    date: "13/01",
  },
  {
    id: 2,
    title: "The Cotton-Jersey Aip-Up Hoodie",
    img: "./img/blog/b2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure magnam maxime officiis possimus fugiat, excepturi sed cupiditate! Natus omnis cum non nisi minima repellendus atque earum id officia exercitationem?",
    date: "13/01",
  },
  {
    id: 3,
    title: "The Cotton-Jersey Aip-Up Hoodie",
    img: "./img/blog/b3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure magnam maxime officiis possimus fugiat, excepturi sed cupiditate! Natus omnis cum non nisi minima repellendus atque earum id officia exercitationem?",
    date: "13/01",
  },
  {
    id: 4,
    title: "The Cotton-Jersey Aip-Up Hoodie",
    img: "./img/blog/b4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure magnam maxime officiis possimus fugiat, excepturi sed cupiditate! Natus omnis cum non nisi minima repellendus atque earum id officia exercitationem?",
    date: "13/01",
  },
  {
    id: 5,
    title: "The Cotton-Jersey Aip-Up Hoodie",
    img: "./img/blog/b5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure magnam maxime officiis possimus fugiat, excepturi sed cupiditate! Natus omnis cum non nisi minima repellendus atque earum id officia exercitationem?",
    date: "13/01",
  },
  {
    id: 6,
    title: "The Cotton-Jersey Aip-Up Hoodie",
    img: "./img/blog/b6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure magnam maxime officiis possimus fugiat, excepturi sed cupiditate! Natus omnis cum non nisi minima repellendus atque earum id officia exercitationem?",
    date: "13/01",
  },
  {
    id: 7,
    title: "The Cotton-Jersey Aip-Up Hoodie",
    img: "./img/blog/b7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iure magnam maxime officiis possimus fugiat, excepturi sed cupiditate! Natus omnis cum non nisi minima repellendus atque earum id officia exercitationem?",
    date: "13/01",
  },
];

const blogContainer = document.getElementById("blog");

window.addEventListener("DOMContentLoaded", () => {
  displayBlogs(blogs);
});

function displayBlogs(items) {
  let displayBlog = items.map((item) => {
    return `<div class="blog-box">
        <div class="blog-img">
            <img src=${item.img} alt="">
        </div>
        <div class="blog-detailes">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>${item.date}</h1>
    </div>`;
  });

  blogContainer.innerHTML = displayBlog.join("");
}

//*********************** */ cart products

const addedProducts = [
  {
    id: 1,
    img: "./img/products/f1.jpg",
    title: "Cartoon Astronaut T-Shirts",
    price: "$118",
    subtotal: "$118",
  },
  {
    id: 2,
    img: "./img/products/f2.jpg",
    title: "Cartoon Astronaut T-Shirts",
    price: "$118",
    subtotal: "$118",
  },
  {
    id: 3,
    img: "./img/products/f3.jpg",
    title: "Cartoon Astronaut T-Shirts",
    price: "$118",
    subtotal: "$118",
  },
];

const cartContainer = document.getElementById("t-rows");

window.addEventListener("DOMContentLoaded", () => {
  displayRows(addedProducts);
});

function displayRows(items) {
  let displayROw = items.map((item) => {
    return `<tr>
        <td><a href=""><i class="far fa-times-circle"></i></a></td>
        <td><img src=${item.img} alt=""></td>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td><input type="number" value="1" min="0"></td>
        <td>${item.subtotal}</td>
    </tr>`;
  });

  cartContainer.innerHTML = displayROw.join("");
}
