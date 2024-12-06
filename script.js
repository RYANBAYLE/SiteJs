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

const maya = document.querySelector("#maya");
const beeArea = document.querySelector(".bee-area");

maya.addEventListener("click", () => {
  beeArea.innerHTML = `<h1> You Win ! </h1>`;
});
