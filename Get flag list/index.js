let div = document.querySelector("#flag");
x = 15;
y = 9;
let color = "black";
let down = false;
for (i = 0; i < x * y; i++) {
  div.appendChild(document.createElement("span")).classList.add("pixel");
}
document.querySelectorAll("#colselect>span").forEach(s => {
  s.addEventListener("click", e => {
    color = e.target.id;
  });
});
document.querySelectorAll(".pixel").forEach(s => {
  s.addEventListener("mouseover", e => {
    if (down) {
      e.target.style.background = color;
    }
  });
  s.addEventListener("mousedown", e => {
    e.target.style.background = color;
  });
});
div.addEventListener("mousedown", e => {
  down = true;
});
div.addEventListener("mouseup", e => {
  down = false;
});

function getArr() {
  ret = [];
  document.querySelectorAll(".pixel").forEach(s => {
    ret.push(s.style.background);
  });
  return ret;
}

function fn_get() {
  a = getArr().map(x => {
    return x == "" ? "white" : x;
  });
  document.write(JSON.stringify(a.map(x => x.replace(' none repeat scroll 0% 0%', ''))));
}
