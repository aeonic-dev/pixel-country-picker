x = 15;
y = 9;
fi = -1;
flagNodes = document.querySelector('.flags');
for (i = 0; i <= flags.length - 1; i++) {
  flagNodes.appendChild(document.createElement('div')).classList.add('flag');
  flagNodes.appendChild(document.createElement('p')).innerHTML=flagnames[i];
  flagNodes.appendChild(document.createElement('br'));
}
let divs = document.querySelectorAll('.flag');
divs.forEach(n=>{
  fi ++;
  for (i = 0; i < x * y; i++) {
    s=n.appendChild(document.createElement("span"));
    s.classList.add("pixel");
    s.style.background=flags[fi][i];
  }

});
