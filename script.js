const svg = document.getElementById("svg");
const para = document.getElementById("para");
svg.addEventListener("click", () => {
  para.classList.toggle("show");
  svg.classList.toggle("rotated");
});
