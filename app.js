const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const clr = document.querySelector(".color");

btn.addEventListener("click", function () {
  const random = getRandomNumber();

  document.body.style.backgroundColor = colors[random];
  clr.textContent = colors[random];
  clr.style.color = colors[random];
});

getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
