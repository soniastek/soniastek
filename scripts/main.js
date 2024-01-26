// image switcher code
const soniaImage = document.getElementById("sonia");

soniaImage.onclick = () => {
  const mySrc = soniaImage.getAttribute("src");
  if (mySrc === "images/youngsonia.png") {
    soniaImage.setAttribute("src", "images/sonia.png");
  } else {
    soniaImage.setAttribute("src", "images/youngsonia.png");
  }
}

const lilaImage = document.getElementById("lila");

lilaImage.onclick = () => {
  const mySrc = lilaImage.getAttribute("src");
  if (mySrc === "images/younglila.png") {
    lilaImage.setAttribute("src", "images/lila.png");
  } else {
    lilaImage.setAttribute("src", "images/younglila.png");
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
