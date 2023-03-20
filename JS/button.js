const Pbtn = document.querySelector("#plusbtn");
const Mbtn = document.querySelector("#minusbtn");
const text = document.querySelector("#txt");
let num = 0;

Pbtn.addEventListener("click", (e) => {
  text.classList.add("none");
  num += 1;
  text.innerHTML = num;
});

Mbtn.addEventListener("click", (e) => {
  num -= 1;
  text.innerHTML = num;
});
