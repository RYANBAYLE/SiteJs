// --------------------------------------------
// la souris
// --------------------------------------------
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

// ----------------------------------------
// La nav
// ----------------------------------------
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

  // ---------------------------------------
  // l'image d'entrée
  // ---------------------------------------
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue < 0.4) {
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

// ------------------------------------------
// date
// ------------------------------------------
function updateDate() {
  // Sélection de l'élément HTML
  const dateElement = document.getElementById("date");

  // Obtenir la date actuelle
  const today = new Date();

  // Formater la date (par exemple : "12 décembre 2024")
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = today.toLocaleDateString("fr-FR", options);

  // Afficher la date sur la page
  dateElement.textContent = formattedDate;
}

// Mettre à jour la date immédiatement
updateDate();

// Vérifier la date toutes les minutes (ou moins fréquemment si nécessaire)
setInterval(updateDate, 1); // 60 000 ms = 1 minute

// -------------------------------------------
// anim Titre
// -------------------------------------------
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

// ----------------------------------------------
// multicolor
// ----------------------------------------------
const multicolor = document.querySelector(".multicolor");

function changecolor() {
  let rgb1 = 0;
  let rgb2 = 0;
  let rgb3 = 0;
  rgb1 = Math.floor(Math.random(rgb1) * 255);
  rgb2 = Math.floor(Math.random(rgb1) * 255);
  rgb3 = Math.floor(Math.random(rgb1) * 255);

  let color = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;

  multicolor.style.background = color;
  multicolor.style.transition = "2s ease";
}
setInterval(changecolor, 2000);

// -----------------------------------------------
// Drag
// -----------------------------------------------
let isDragging = false;
let offsetX, offsetY;

multicolor.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - multicolor.offsetLeft;
  offsetY = e.clientY - multicolor.offsetTop;
  multicolor.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    multicolor.style.left = `${e.clientX - offsetX}px`;
    multicolor.style.top = `${e.clientY - offsetY}px`;
    multicolor.style.transition = "0s ease";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  multicolor.style.cursor = "grab";
});

// ---------------------------------------------
// Le mode Rouge
// ---------------------------------------------

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

// ------------------------------------------
// la side bar
// ------------------------------------------
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

// ----------------------------------------------
// chope l'abeille
// ----------------------------------------------
const maya = document.querySelector("#maya");
const beeArea = document.querySelector(".bee-area");

maya.addEventListener("click", () => {
  beeArea.innerHTML = `<h1> You Win ! </h1>`;
});

// -----------------------------------------------
// Générateur de mdp
// -----------------------------------------------

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = '&~#{[(-|`_^])}=*$"!:;,?/.€£+ç';
const rangeValue = document.getElementById("password-lenght");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;
  passwordOutput.select();

  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Copié!";

  setTimeout(() => {
    generateButton.textContent = "Générer le mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
