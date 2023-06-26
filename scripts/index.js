const canvas = document.querySelector(".canvas");

const colorButton = document.querySelector(".settings__color-button");
const colorSpan = document.querySelector(".settings__color-button > span");
const colorInput = document.querySelector(".settings__color-input");
const fakeColorInput = document.querySelector(".settings__fake-color-input");

const resetColorButton = document.querySelector(".settings__reset-color-button");
const resetArtButton = document.querySelector(".settings__reset-art-button");

const canvasSize = 600;
const canvasPixelsNumber = 30;
const canvasPixelSize = 15;

let activeColor = "#55c332";
let isMouseDown = false;


function handleResetColor() {
  activeColor = "#55c332";

  renderColorSpan();
}

function handleResetArt() {
  renderPixels();
}

function initializeCanvas() {
  canvas.style.gridTemplateColumns = `repeat(${canvasPixelsNumber}, ${canvasSize ? (canvasSize / canvasPixelsNumber) : canvasPixelSize}px)`;
  canvas.style.gridTemplateRows = `repeat(${canvasPixelsNumber}, ${canvasSize ? (canvasSize / canvasPixelsNumber) : canvasPixelSize}px)`;
  canvas.style.width = canvasSize + 'px';
  canvas.style.height = canvasSize + 'px';
}

function renderColorSpan() {
  colorInput.value = activeColor;
  colorSpan.textContent = activeColor;
  fakeColorInput.style.backgroundColor = activeColor;
}

function renderPixels() {
  canvas.innerHTML = "";

  for (let i = 0; i < canvasPixelsNumber * canvasPixelsNumber; i++) {
    const pixelElement = document.createElement("div");

    pixelElement.classList.add("canvas__pixel");

    pixelElement.addEventListener("mouseenter", () => {
      if (isMouseDown) {
        pixelElement.style.backgroundColor = activeColor;
      }
    })

    canvas.appendChild(pixelElement);
  }
}

function setEventListeners() {
  window.addEventListener("mousedown", evt => {
    evt.preventDefault();
    isMouseDown = true;
  });

  window.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  // canvas.addEventListener("mousemove", evt => {
  //   if (isMouseDown) {
  //     evt.target.style.backgroundColor = colorInput.value;
  //   }
  // });

  colorInput.addEventListener("input", () => {
    activeColor = colorInput.value;
    fakeColorInput.style.backgroundColor = activeColor;
    colorSpan.textContent = activeColor;
  });

  colorButton.addEventListener("click", () => {
    colorInput.click();
  });

  resetColorButton.addEventListener("click", handleResetColor);

  resetArtButton.addEventListener("click", handleResetArt);

}


renderPixels();
renderColorSpan();
initializeCanvas();
setEventListeners();
