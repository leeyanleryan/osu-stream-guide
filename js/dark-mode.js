(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  }
  else {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark-mode");
  }
})();