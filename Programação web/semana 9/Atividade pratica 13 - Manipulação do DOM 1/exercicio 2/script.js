const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear");
const clickCount = document.querySelector("#clickCount");
let cont = 0;

addBtn.addEventListener("click", function () {
  clickCount.parentElement.style.display = "block";
  cont++;
  clickCount.innerText = `${cont}`;
});

clearBtn.addEventListener("click", function () {
  cont = 0;
  clickCount.parentElement.style.display = "none";
});
