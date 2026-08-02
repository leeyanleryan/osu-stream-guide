const pullChain = document.getElementById("pull-chain");

pullChain.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark" || 
      document.documentElement.classList.contains("dark-mode")) {
    document.documentElement.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
  else {
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
});