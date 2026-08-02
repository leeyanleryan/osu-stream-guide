const pullChain = document.getElementById("pull-chain");

pullChain.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
  }
  else {
    document.body.classList.add("dark-mode");
  }
});