const selectedItem = (evt) => {
        const linkClicked = evt.target;
        alert("Bạn hãy đăng nhập để thêm sản phẩm vào giỏ hàng");
}

function addEventToAllCartButtons() {
    const add2CartLinks = document.getElementsByClassName('add');
    const arrCartLinks = Array.from(add2CartLinks);

    const registerEventListener = (elmt) => elmt.addEventListener('click',selectedItem,false);
    arrCartLinks.forEach(registerEventListener);

    const shoppingCart = document.querySelector('.shopping-cart');
    shoppingCart.addEventListener("click", function(){
        alert("Bạn hãy đăng nhập để thêm sản phẩm vào giỏ hàng");
    });
}


const formatPercentage = (value, locale = "en-US") => {
    return new Intl.NumberFormat(locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(value);
}

const formatCurrency = (amount, locale = "vi-VN") => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

//  Hoạt ảnh banner //
let index__banner = 1;
const changeImage = () => {
  let imgs = [
    "./components/assets/bgimg.jpg",
    "./components/assets/banner5.jpg",
    "./components/assets/banner6.jpg",
    "./components/assets/banner7.jpg",
    "./components/assets/banner8.webp",
  ];
  document.getElementById("banner").src = imgs[index__banner];
  index__banner++;
  if (index__banner == 5) {
    index__banner = 0;
  }
};
setInterval(changeImage, 4000);


// Search item //
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("search-input")
    .addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const products = document.querySelectorAll(".product");

      products.forEach((product) => {
        const productName = product
          .querySelector(".name")
          .textContent.toLowerCase();
        product.style.display = productName.includes(query) ? "block" : "none";
      });
    });
});


function addZero(number) {
    return number < 10 ? "0" + number : number;
  }
  
  function updateDateTime() {
    let today = new Date();
    let good = today.getHours() > 18 ? "GOOD EVENING" : "GOOD MORNING";
    /* Check if it's AM or PM and set the icon */
    let icon =
      today.getHours() >= 18
        ? `<div class="moon"><img src="./components/assets/moonst.png" alt="">
  </div>`
        : `<div class="sun"><img src="./components/assets/sun.png" alt=""></div>`;
  
    let check = today.getHours() >= 12 ? "PM" : "AM";
  
    let time =
      addZero(today.getHours()) +
      ":" +
      addZero(today.getMinutes()) +
      ":" +
      addZero(today.getSeconds()) +
      " " +
      check;
  
    /* DATE */
    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date =
      weekdays[today.getDay()] +
      " " +
      addZero(today.getDate()) +
      "/" +
      addZero(today.getMonth() + 1) +
      "/" +
      today.getFullYear();
  
    document.getElementById("set-day").innerHTML = date;
    document.getElementById("weather-icon").innerHTML = icon;
    document.getElementById("set-hour").innerHTML = time;
    document.getElementById("good").innerHTML = good;
  }
  
  setInterval(updateDateTime, 1000);