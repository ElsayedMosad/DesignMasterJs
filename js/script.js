// Play menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".links");
const menuArrow = document.querySelector(".menu-arrow");
menuToggle.addEventListener("click", (e) => {
  if (e.target !== menuArrow) {
    menuLinks.classList.toggle("open-menu");
  }
  if (settingBox.classList.contains("set-open")) {
    settingBox.classList.remove("set-open");
  }
});
document.addEventListener("click", function (e) {
  if (
    e.target != menuLinks &&
    e.target !== menuToggle &&
    menuLinks.classList.contains("open-menu")
  ) {
    menuLinks.classList.remove("open-menu");
  }
});
menuToggle.onclick = function (e) {
  e.stopPropagation();
};
// menuLinks.onclick = function (e) {
//   e.stopPropagation();
// };

let valueChangeBg = "yes";
const setRandom = document.querySelector(".set-random");
const opRandom = document.querySelectorAll(".set-random li");
const yesRandom = setRandom.querySelector(".yes");
const NoRandom = setRandom.querySelector(".no");
// stop Random bg and add active to no if localStorage optionRandom no
if (localStorage.getItem("optionRandom") === "no") {
  valueChangeBg = localStorage.getItem("optionRandom");
  yesRandom.classList.remove("active-op");
  NoRandom.classList.add("active-op");
}

opRandom.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (!e.target.classList.contains("active-op")) {
      opRandom.forEach((e) => {
        if (e.classList.contains("active-op")) {
          e.classList.remove("active-op");
        }
      });
      localStorage.setItem("optionRandom", e.target.classList);
      e.target.classList.add("active-op");
    }
    if (e.target.classList.contains("yes")) {
      valueChangeBg = "yes";
      autoChangeBg();
    }
    if (e.target.classList.contains("no")) {
      valueChangeBg = "no";
      clearInterval(repeatChange);
    }
  });
});
// change background random
const home = document.querySelector(".home");
const arrImg = [
  "p1.jpg",
  "p2.jpg",
  "p3.jpg",
  "p4.jpg",
  // "p5.jpg",
  "p6.jpg",
  "p7.jpg",
  "p8.jpg",
  "p9.jpg",
  "p10.jpg",
  "p11.jpg",
  "p12.jpg",
];
// change background

// Method one
// function autoChangeBg() {
//   if (valueChangeBg === "yes") {
//     repeatChange = setInterval(() => {
//       home.style.cssText = `background-image: url('imgs/${
//         arrImg[nextIndex()]
//       }')`;
//     }, 1000);
//   }
// }
// let i = 0;
// function nextIndex() {
//   i++;
//   if (i === arrImg.length - 1) {
//     i = 0;
//   }
//   return i;
// }
// Method two
function autoChangeBg() {
  if (valueChangeBg === "yes") {
    repeatChange = setInterval(() => {
      home.style.cssText = `background-image: url('imgs/${
        arrImg[Math.floor(Math.random() * arrImg.length)]
      }')`;
    }, 5000);
  }
}
autoChangeBg();
// function changeBack() {
//   home.style.cssText = `background-image: url('imgs/${
//     arrImg[getRandomInt(arrImg.length)]
//   }')`;
// }
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// let repeatChange = setInterval(changeBack, 5000);
// play setting box
const settingBox = document.querySelector(".set-box");
const gear = document.querySelector(".gear");

gear.addEventListener("click", () => settingBox.classList.toggle("set-open"));

const root = document.querySelector(":root");
const colors = document.querySelectorAll(".set-colors li");
// check localStorage and change setting
if (localStorage.getItem("index")) {
  clearActive();
  let color = colors[localStorage.getItem("index")].style.backgroundColor;
  colors[localStorage.getItem("index")].classList.add("color-active");
  root.style.setProperty("--var-color", color);
}
colors.forEach(function (e, index) {
  e.addEventListener("click", function (e) {
    if (!e.target.classList.contains("color-active")) {
      let color = e.target.style.backgroundColor;
      root.style.setProperty("--var-color", color);
      clearActive();
      e.target.classList.add("color-active");
      localStorage.setItem("index", index);
    }
  });
});
// Remove color-active class if founded
function clearActive() {
  colors.forEach((e) => {
    if (e.classList.contains("color-active")) {
      e.classList.remove("color-active");
    }
  });
}

// yesRandom.onclick = function () {
//   console.log("face");
//   clearInterval(repeatChange);
// };
// NoRandom.onclick = function () {
//   console.log("bace");
//   setInterval(() => {
//     repeatChange;
//   }, 1000);
// };
const setBullets = document.querySelector(".set-bullets");
const opBullets = document.querySelectorAll(".set-bullets li");
// const yesRandom = setRandom.querySelector(".yes");
// const NoRandom = setRandom.querySelector(".no");
opBullets.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (!e.target.classList.contains("active-op")) {
      opBullets.forEach((e) => {
        if (e.classList.contains("active-op")) {
          e.classList.remove("active-op");
        }
      });
      localStorage.setItem("optionBullets", e.target.classList);
      e.target.classList.add("active-op");
    }
  });
});

// Play our skills

const skills = document.querySelector(".skills");
const skillItems = skills.querySelectorAll(".skill-show span");

window.addEventListener("scroll", function () {
  // change width of span skill if scroll in visible
  if (
    this.scrollY >= skills.offsetTop - 100 &&
    this.scrollY < skills.offsetTop + skills.offsetHeight
  ) {
    skillItems.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  } else {
    skillItems.forEach((e) => {
      e.style.width = 0;
    });
  }
});
