const logo = document.getElementById("logo");
const logoImages = [
    "./images/logo.png",
    "./images/logo-2.png"
];
let logoInterval;
let currentLogo = 0;
logoImages.forEach((src) => {
    const image = new Image();
    image.src = src;
});
logo.addEventListener("pointerenter", () => {
    logoInterval = setInterval(() => {
    currentLogo = currentLogo === 0 ? 1 : 0;
    logo.src = logoImages[currentLogo];
    }, 120);
});
logo.addEventListener("pointerleave", () => {
    clearInterval(logoInterval);

    currentLogo = 0;
    logo.src = logoImages[0];
});