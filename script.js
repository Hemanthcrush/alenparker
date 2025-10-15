// small typed-demo for the terminal block
const t = document.getElementById('terminal');
const btn = document.getElementById('typeButton');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const lines = [
  "> booting secure shell...",
  "> loading fragments: [kernel.js, cipher.wasm, ui.css]",
  "> welcome, operator.",
  "> hint: paste your story below the Latest — e‑novel section."
];

function typeLines(target, arr, speed=40){
  target.textContent = '';
  let i=0, j=0;
  const step = () => {
    if(i>=arr.length) return;
    const line = arr[i];
    if(j <= line.length){
      target.innerHTML = line.substring(0,j) + (j%2? '|' : '');
      j++;
      setTimeout(step, speed);
    } else {
      target.innerHTML = line;
      i++; j=0;
      setTimeout(step, 500);
    }
  };
  step();
}

btn.addEventListener('click', ()=> typeLines(t, lines, 28));
