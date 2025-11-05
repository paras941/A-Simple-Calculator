let expr = "";
const display = document.getElementById("display");


document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => handle(btn.textContent.trim()));
});

function handle(value) {
  switch (value) {
    case "=":
      calculate();
      break;
    case "C":
      expr = "";
      render();
      break;
    case "DEL":

      expr = expr.slice(0, -1);
      render();
      break;
    default:

      expr += value;
      render();
      break;
  }
}

function calculate() {

  if (expr === "") {
    return;
  }

  try {

    const result = eval(expr);


    if (!isFinite(result)) {
      expr = "";
      display.value = "Error";
      return;
    }


    expr = String(result);

  } catch {

    expr = "";
    display.value = "Error";
    return;
  }
  render();
}

function render() {

  display.value = (expr === "") ? "0" : expr;
}


render();