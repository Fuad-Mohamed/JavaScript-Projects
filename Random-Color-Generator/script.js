const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * 1000000);
  //   console.log(`#${randomIndex}`);
  document.body.style.backgroundColor = `#${randomIndex}`;
});
