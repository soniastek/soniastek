// image switcher code
const soniaImage = document.getElementById("sonia");

soniaImage.onclick = () => {
  const mySrc = soniaImage.getAttribute("src");
  if (mySrc === "images/youngsonia.png") {
    soniaImage.setAttribute("src", "images/sonia.png");
  } else {
    soniaImage.setAttribute("src", "images/youngsonia.png");
  }
};



const lilaImage = document.getElementById("lila");

lilaImage.onclick = () => {
  const mySrc = lilaImage.getAttribute("src");
  if (mySrc === "images/younglila.png") {
    lilaImage.setAttribute("src", "images/lila.png");
  } else {
    lilaImage.setAttribute("src", "images/younglila.png");
  }
};
