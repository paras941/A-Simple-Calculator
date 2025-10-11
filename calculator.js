let expr = "";                         
const display = document.getElementById("display");


document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => handle(btn.textContent.trim()));
});

function handle(value) {
  if (value === "=") {
    calculate();
    return;
  }
  if (value === "C") {
    expr = "";
    render();
    return;
  }
 
  expr += value;
  render();
}

function calculate() {
  try {
    
    const result = eval(expr);         
    expr = (result !== undefined) ? String(result) : "";
  } catch {
    expr = "";
    display.value = "Error";
    return;
  }
  render();
}

function render() {
  display.value = expr;
}
