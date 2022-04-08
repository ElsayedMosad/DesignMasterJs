// Play menu toggle

const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".links");
// To Remove Event click from it
const menuArrow = document.querySelector(".menu-arrow");

menuToggle.addEventListener("click", (e) => {
  // add and remove on click menuToggle
  if (e.target !== menuArrow) {
    menuLinks.classList.toggle("open-menu");
  }
  // close settingBox on click menu if it is opened
  if (settingBox.classList.contains("set-open")) {
    settingBox.classList.remove("set-open");
  }
});

// Close menu on click anywhere
document.addEventListener("click", function (e) {
  // check target no links and menu and menu open
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
// No needed because target links in document event
// menuLinks.onclick = function (e) {
//   e.stopPropagation();
// };

// bulid function delete class if found
function deleteActiveOp(options, currentClass) {
  options.forEach((e) => {
    if (e.classList.contains(currentClass)) {
      e.classList.remove(currentClass);
    }
  });
}

// Frist Value of valueChangeBg yes
let valueChangeBg = "yes";

const setRandom = document.querySelector(".set-random");
const opRandom = document.querySelectorAll(".set-random li");
const yesRandom = setRandom.querySelector(".yes");
const NoRandom = setRandom.querySelector(".no");

// change value of valueChangeBg and change place of active-op class if local no
if (localStorage.getItem("optionRandom") === "no") {
  valueChangeBg = localStorage.getItem("optionRandom");
  yesRandom.classList.remove("active-op");
  NoRandom.classList.add("active-op");
}

// change Random option on click yes or no && localStorage value of class
opRandom.forEach((e) => {
  e.addEventListener("click", function (e) {
    // Check target not active
    if (!e.target.classList.contains("active-op")) {
      // delete class form last
      deleteActiveOp(opRandom, "active-op")
      // add class to target and chenge localStorage
      localStorage.setItem("optionRandom", e.target.classList);
      e.target.classList.add("active-op");

      if (e.target.classList.contains("yes")) {
        valueChangeBg = "yes";
        autoChangeBg();
      } else if (e.target.classList.contains("no")) {
        valueChangeBg = "no";
        clearInterval(repeatChange);
      }
    }
  });
});
// change background random
const home = document.querySelector(".home");
// Array From images
const arrImg = [
  "p1.jpg",
  "p2.jpg",
  "p3.jpg",
  "p4.jpg",
  "p5.jpg",
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
function autoChangeBg() {
  if (valueChangeBg === "yes") {
    repeatChange = setInterval(() => {
      home.style.cssText = `background-image: url('imgs/${
        arrImg[Math.floor(Math.random() * arrImg.length)]
      }')`;
    }, 10000);
  }
}
autoChangeBg();

// Method two

// function autoChangeBg() {
//   if (valueChangeBg === "yes") {
//     repeatChange = setInterval(() => {
//       home.style.cssText = `background-image: url('imgs/${
//         arrImg[nextIndex()]
//       }')`;
//     }, 10000);
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


// play setting box

const settingBox = document.querySelector(".set-box");
const gear = document.querySelector(".gear");
// open or close control panel on click gear
gear.addEventListener("click", () => settingBox.classList.toggle("set-open"));

// colors box change root and local index
const root = document.querySelector(":root");
const colors = document.querySelectorAll(".set-colors li");
// check localStorage and change setting change var color
if (localStorage.getItem("index")) {
  // get backgroundColor value by using index
  let color = colors[localStorage.getItem("index")].style.backgroundColor;
  root.style.setProperty("--var-color", color);
  deleteActiveOp(colors, "color-active");
  // add class to current index
  colors[localStorage.getItem("index")].classList.add("color-active");
}

colors.forEach(function (e, index) {
  e.addEventListener("click", function (e) {
    if (!e.target.classList.contains("color-active")) {
      let varColor = e.target.style.backgroundColor;
      root.style.setProperty("--var-color", varColor);
      deleteActiveOp(colors, "color-active");
      e.target.classList.add("color-active");
      localStorage.setItem("index", index);
    }
  });
});


// Change to dark
const setMood = document.querySelector(".set-mood");
const opMood = document.querySelectorAll(".set-mood li");
const yesMood = setMood.querySelector(".yes");
const NoMood = setMood.querySelector(".no");

// localStorage if light mood no and change to dark if no
if (localStorage.getItem("optionMood") === "no") {
  document.querySelector("body").classList.add("mood");
  yesMood.classList.remove("active-op");
  NoMood.classList.add("active-op");
}

opMood.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (!e.target.classList.contains("active-op")) {
      deleteActiveOp(opMood, "active-op");
      localStorage.setItem("optionMood", e.target.classList);
      e.target.classList.add("active-op");
      if (e.target.classList.contains("no")) {
        document.querySelector("body").classList.add("mood");
      } else if (e.target.classList.contains("yes")) {
        document.querySelector("body").classList.remove("mood");
      }
    }
  });
});


// Add & Remove Bullets
const setBullets = document.querySelector(".set-bullets");
const opBullets = document.querySelectorAll(".set-bullets li");
const yesBull = setBullets.querySelector(".yes");
const NoBull = setBullets.querySelector(".no");
// check localStorage if Bullets removed
if (localStorage.getItem("optionBullets") == "no") {
  document.querySelector(".bullets").classList.add("open-bull");
  yesBull.classList.remove("active-op");
  NoBull.classList.add("active-op");
}
opBullets.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (!e.target.classList.contains("active-op")) {
      deleteActiveOp(opBullets, "active-op");
      localStorage.setItem("optionBullets", e.target.classList);
      if (e.target.classList.contains("no")) {
        document.querySelector(".bullets").classList.add("open-bull");
      }
      if (e.target.classList.contains("yes")) {
        document.querySelector(".bullets").classList.remove("open-bull");
      }
      e.target.classList.add("active-op");
    }
  });
});

// Play our skills
const skills = document.querySelector(".skills");
const skillItems = skills.querySelectorAll(".skill-show span");

// change skills width if scroll on it
window.addEventListener("scroll", function () {
  // change width of span skill if scroll in visible
  if (
    this.scrollY >= skills.offsetTop - 200 &&
    this.scrollY < skills.offsetTop + skills.offsetHeight + 200
  ) {
    if (skillItems[0].style.width != skillItems[0].dataset.width) {
      skillItems.forEach((e) => {
        e.style.width = e.dataset.width;
      });
    }
  } else {
    if (skillItems[0].style.width != 0) {
      skillItems.forEach((e) => {
        e.style.width = 0;
      });
    }
  }
});

// open img in popup on click it
const imgsGallery = document.querySelectorAll(".gallery img");
imgsGallery.forEach((e, index) => {
  e.addEventListener("click", () => {
    // Creat overlay => show image
    let showImg = document.createElement("div");
    showImg.classList.add("show-img");
    document.body.appendChild(showImg);
    // Create Box image
    let imgBox = document.createElement("div");
    imgBox.classList.add("img-box");
    showImg.appendChild(imgBox);
    // Create Title for image
    let imgTitle = document.createElement("h3");
    imgTitle.classList.add("img-title");
    imgBox.appendChild(imgTitle);
    // Create text Title
    // Create img
    let img = document.createElement("img");
    img.src = e.src;
    imgBox.appendChild(img);
    if (e.alt) {
      let imgText = document.createTextNode(e.alt);
      imgTitle.appendChild(imgText);
    } else {
      let imgText = document.createTextNode("Image Deap");
      imgTitle.appendChild(imgText);
      img.alt = "Image Deap";
      console.log("dddd");
    }
    // Creat close-img
    let closeImg = document.createElement("span");
    closeImg.classList.add("close-img");
    closeImg.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    imgBox.appendChild(closeImg);
    closeImg.addEventListener("click", () => {
      showImg.remove();
    });
  });
});

// Reset option
document.querySelector(".set-box .reset").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
