const logo = document.getElementById("logo");
const logoImages = [
  "./images/logo.png",
  "./images/logo-x.png",
  "./images/logo-z.png",
  "./images/logo-zx.png"
];

let logoInterval;
let currentLogo = 0;

logoImages.forEach((src) => {
  const image = new Image();
  image.src = src;
});

logo.addEventListener("pointerenter", () => {
  logoInterval = setInterval(() => {
  if (currentLogo === 0) {
    currentLogo = 1;
  }
  else if (currentLogo === 1) {
    currentLogo = 2;
  }
  else if (currentLogo === 2) {
    currentLogo = 1;
  }
  logo.src = logoImages[currentLogo];
  }, 120);
});

logo.addEventListener("pointerleave", () => {
  clearInterval(logoInterval);

  currentLogo = 0;
  logo.src = logoImages[0];
});

const pressedKeys = new Set();

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyZ" || event.code === "KeyX") {
    pressedKeys.add(event.code);
    updateLogo();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "KeyZ" || event.code === "KeyX") {
    pressedKeys.delete(event.code);
    updateLogo();
  }
});

function updateLogo() {
  const zPressed = pressedKeys.has("KeyZ");
  const xPressed = pressedKeys.has("KeyX");

  if (zPressed && xPressed) {
    logo.src = logoImages[3];
  } else if (zPressed) {
    logo.src = logoImages[2];
  } else if (xPressed) {
    logo.src = logoImages[1];
  } else {
    logo.src = logoImages[0];
  }
}