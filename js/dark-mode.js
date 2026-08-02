function applyStoredTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
}

applyStoredTheme();

const pullChain = document.getElementById("pull-chain");

pullChain.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
  else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
});