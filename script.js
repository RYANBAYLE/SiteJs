// la souris-----------------------------------
const mouse = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouse.forEach((cursor) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
});
// window.addEventListener("mousedown", () => {
//   mouse.forEach((cursor) => {
//     cursor.style.display = "none";
//   });
// });
// window.addEventListener("mouseup", () => {
//   mouse.forEach((cursor) => {
//     cursor.style.display = "none";
//   });
// });

// La nav----------------------------

const nav = document.querySelector("nav");
const René = document.getElementById("René");
const phi = document.getElementById("phi");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll < lastScroll) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-50px";
  }
  lastScroll = scroll;

  // l'image d'entrée-----------------------
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue < 0.51) {
    René.style.opacity = 0;
    René.style.transform = "scale(2)";
    phi.style.transform = "scale(1)";
    phi.style.opacity = "1";
  } else {
    René.style.opacity = 1;
    René.style.transform = "scale(1)";
    phi.style.transform = "scale(2)";
    phi.style.opacity = "0";
  }
});

// anim Titre--------------------------
const target = document.getElementById("target");
let array = ["Site", "Projet", "Talent"];
let WordIndex = 0;
let LetterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[WordIndex][LetterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2000);
};

const loop = () => {
  setTimeout(() => {
    if (WordIndex >= array.length) {
      WordIndex = 0;
      LetterIndex = 0;

      loop();
    } else if (LetterIndex < array[WordIndex].length) {
      createLetter();
      LetterIndex++;

      loop();
    } else {
      WordIndex++;
      LetterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 60);
};
loop();
// Le mode Rouge--------------------------

const red = document.getElementById("rouge");

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "rouge":
      document.body.style.background = "red";
      red.style.display = "none";
      bleu.style.display = "block";
      break;
    case "bleu":
      document.body.style.background =
        "linear-gradient(0deg,rgb(18, 81, 81) 0%,rgba(60, 60, 100, 1) 100%)";
      red.style.display = "block";
      bleu.style.display = "none";
      document.body.style.transition = "0.5s ease";
      break;
    default:
      null;
  }
});

// la side bar --------------------------
const btn = document.getElementById("btn");

const sideBar = document.getElementById("side-bar");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

const mouv = () => {
  const maya = document.querySelector("#maya");

  const topValue = Math.random() * 90;
  const leftValue = Math.random() * 90;

  maya.style.top = `${topValue}%`;
  maya.style.left = `${leftValue}%`;
};
setInterval(() => {
  mouv();
}, 2000);

// chope l'abeille-------------------------
const maya = document.querySelector("#maya");
const beeArea = document.querySelector(".bee-area");

maya.addEventListener("click", () => {
  beeArea.innerHTML = `<h1> You Win ! </h1>`;
});
