const stars = document.querySelectorAll(".lucide-star-icon");
const para = document.getElementById("para");

let currentRating = 0;

function colorStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.fill = "gold";
    } else {
      star.style.fill = "none";
    }
  });
}
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    colorStars(index + 1);
  });
  star.addEventListener("mouseout", () => {
    colorStars(currentRating);
  });
  star.addEventListener("click", () => {
    currentRating = index + 1;
    para.textContent = `Rating ${currentRating}`;
  });
});
