var ans = "";
var anss = "";
const result = document.getElementById("result");
const loli = document.querySelectorAll(".btn");
// forEach um erkennen und auswahlen
loli.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
    clicksourie();
  });
});
//functionresult
equal.addEventListener("click", () => {
  clicksourie();
  var change = "";
  var reste = "";

  for (let i = 0; i < 3; i++) {
    change = change + result.textContent[i];
  }
  for (let j = 3; j <= result.textContent.length - 1; j++) {
    reste = reste + result.textContent[j];
  }
  if (change === "Ans") {
    ans += reste;
    result.textContent = eval(ans);
  } else {
    result.textContent = ans + result.textContent;
    result.textContent = eval(result.textContent);
  }
});
//clearEffet
ac.addEventListener("click", () => {
  clicksourie();
  result.textContent = "";
});
//delEffet
del.addEventListener("click", () => {
  clicksourie();
  var change = "";
  for (let i = 0; i < result.textContent.length - 1; i++) {
    change = change + result.textContent[i];
  }
  result.textContent = change;
});
// memoireEffet
memoire.addEventListener("click", () => {
  clicksourie();
  var vari = result.textContent;
  result.textContent = "Ans";
  ans = vari;
});
// MouseSonEffet
const clicksourie = () => {
  const audio = new Audio();
  audio.src = "./souris.mp3";
  audio.play();
};
//MousStleeffet
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
