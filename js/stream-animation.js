const logo = document.getElementById("logo");
const logoImages = [
    "./images/logo.png",
    "./images/logo-x.png",
    "./images/logo-z.png"
];
let logoInterval;
let currentLogo = 0;
logoImages.forEach((src) => {
    const image = new Image();
    image.src = src;
});
logo.addEventListener("pointerenter", () => {
    logoInterval = setInterval(() => {
    // currentLogo = currentLogo === 0 ? 1 : 0;
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