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
      document.querySelector("#selected").innerHTML = validate();
    }
  });
  s.addEventListener("mousedown", e => {
    e.target.style.background = color;
    document.querySelector("#selected").innerHTML = validate();
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
let flags = [
  [ "blue", "blue", "blue", "blue", "blue", "blue", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "blue", "white", "blue", "white", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "blue", "blue", "white", "blue", "white", "blue", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red"
  ],
  [
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "red", "red", "red", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "red", "red", "red", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "red", "red", "red", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
  ],
  [
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "yellow", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"
  ],
  [
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red"
  ],
  [
    "black","black","black","black","black","black","black","black","black","black","black","black","black","black","black",
    "black","black","black","black","black","black","black","black","black","black","black","black","black","black","black",
    "black","black","black","black","black","black","black","black","black","black","black","black","black","black","black",
    "red","red","red","red","red","red","red","red","red","red","red","red","red","red","red",
    "red","red","red","red","red","red","red","red","red","red","red","red","red","red","red",
    "red","red","red","red","red","red","red","red","red","red","red","red","red","red","red",
    "yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow",
    "yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow",
    "yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow"
  ],
  [
    "red", "red", "red", "red", "red", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "red", "red", "red", "red", "red", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red",
  ],
  [
    "blue", "blue", "blue", "blue", "blue", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow",
    "blue", "blue", "blue", "blue", "blue", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
  ],
  [
    "red", "red", "red", "red", "white", "blue", "white", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "white", "blue", "white", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "white", "blue", "white", "red", "red", "red", "red", "red", "red", "red", "red",
    "white", "white", "white", "white", "white", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "white", "white", "white", "white", "white", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "red", "red", "red", "red", "white", "blue", "white", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "white", "blue", "white", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "white", "blue", "white", "red", "red", "red", "red", "red", "red", "red", "red",
  ],
  [
    "white", "white", "white", "blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "white", "white", "white", "blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white",
  ],
  [
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
  ],
  [
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red",
    "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red"
  ],
  [
    "green","green","green","green","green","green","green","green","green","green","green","green","green",
    "green","green","green","green","green","green","green","green","green","yellow","green","green","green",
    "green","green","green","green","green","green","green","green","green","yellow","yellow","yellow",
    "yellow","yellow","green","green","green","green","green","green","green","green","yellow","yellow",
    "yellow","blue","blue","blue","yellow","yellow","yellow","green","green","green","green","green",
    "yellow","yellow","yellow","yellow","blue","white","blue","yellow","yellow","yellow","yellow","green",
    "green","green","green","green","yellow","yellow","yellow","blue","blue","blue","yellow","yellow",
    "yellow","green","green","green","green","green","green","green","green","yellow","yellow","yellow",
    "yellow","yellow","green","green","green","green","green","green","green","green","green","green",
    "green","green","yellow","green","green","green","green","green","green","green","green","green","green",
    "green","green","green","green","green","green","green","green","green","green","green","green"
  ],
  [
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
    "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"
  ],
];
let flagnames = ["USA", "Japan", "Argentina", "France", "Germany", "Denmark", "Sweden", "Norway", "Finland","Russia", "Italy", "Brazil", "Indonesia"];
function validate() {
  a = getArr().map(x => {
    return x == "" ? "white" : x;
  });
  for (i = 0; i < flags.length; i++) {
    if (
      JSON.stringify(
        flags[i].map(x => {
          return x == "" ? "white" : x;
        })
      ) == JSON.stringify(a.map(x => x.replace(" none repeat scroll 0% 0%", "")))
    ) {
      return flagnames[i];
    }
  }
  return "none";
}
