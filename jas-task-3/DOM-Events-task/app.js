const displayArea = document.querySelector("#displayArea");
const boldBtn = document.querySelector("#boldBtn");
const italicBtn = document.querySelector("#italicBtn");
const leftBtn = document.querySelector("#leftBtn");
const centerBtn = document.querySelector("#centerBtn");
const rightBtn = document.querySelector("#rightBtn");
const upperBtn = document.querySelector("#upperBtn");
const lowerBtn = document.querySelector("#lowerBtn");
const capitalizeBtn = document.querySelector("#capitalizeBtn");
const clearBtn = document.querySelector("#clearBtn");
const textColor = document.querySelector("#textColor");
const bgColor = document.querySelector("#bgColor");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

boldBtn.addEventListener("click", function () {
  if (displayArea.style.fontWeight === "bold") {
    displayArea.style.fontWeight = "normal";
  } else {
    displayArea.style.fontWeight = "bold";
  }
});

italicBtn.addEventListener("click", function () {
  if (displayArea.style.fontStyle === "italic") {
    displayArea.style.fontStyle = "normal";
  } else {
    displayArea.style.fontStyle = "italic";
  }
});

leftBtn.addEventListener("click", function () {
  displayArea.style.textAlign = "left";
});

centerBtn.addEventListener("click", function () {
  displayArea.style.textAlign = "center";
});

rightBtn.addEventListener("click", function () {
  displayArea.style.textAlign = "right";
});

upperBtn.addEventListener("click", function () {
  displayArea.textContent = displayArea.textContent.toUpperCase();
});

lowerBtn.addEventListener("click", function () {
  displayArea.textContent = displayArea.textContent.toLowerCase();
});

capitalizeBtn.addEventListener("click", function () {
  let words = displayArea.textContent.toLowerCase().split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  displayArea.textContent = result.join(" ");
});

clearBtn.addEventListener("click", function () {
  displayArea.textContent = "";
});

textColor.addEventListener("input", function () {
  displayArea.style.color = textColor.value;
});

bgColor.addEventListener("input", function () {
  displayArea.style.backgroundColor = bgColor.value;
});

fontSize.addEventListener("input", function () {
  displayArea.style.fontSize = fontSize.value + "px";
});

fontFamily.addEventListener("change", function () {
  displayArea.style.fontFamily = fontFamily.value;
});