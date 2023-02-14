const buttons = document.querySelectorAll("button");
const displayResult = document.querySelector("[data-previous-result]");
const equalBtn = document.querySelector("[data-equal]");

let displayValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.textContent;
    if (buttonText === "=") {
      displayResult.textContent = eval(displayValue);
      displayValue = "";
    } else if (buttonText === "C") {
      displayValue = "";
      displayResult.textContent = displayValue;
    } else if (buttonText === "." && displayResult.textContent.includes(".")) {
      return;
    } else {
      displayValue += buttonText;
      displayResult.textContent = displayValue;
    }
  });
}

document.addEventListener("keydown", (event) => {
  keyText = event.key;
  if (
    keyText == "+" ||
    keyText == "-" ||
    keyText == "*" ||
    keyText == "/" ||
    keyText == "." ||
    (keyText < 10 && keyText >= 0)
  ) {
    for (item of buttons) {
      if (item.textContent === keyText) {
        item.style.background = "darkred";
      }
    }
    if (keyText === "." && displayResult.textContent.includes(".")) {
      return;
    }
    displayValue += keyText;
    displayResult.textContent = displayValue;
  } else if (keyText === "Enter") {
    displayResult.textContent = eval(displayValue);
    equalBtn.style.background = "darkred";
  } else if (keyText == "Backspace") {
    let length = displayValue.length;
    displayValue = displayValue
      .toString()
      .split("")
      .slice(0, length - 1)
      .join("");
    displayResult.textContent = displayValue;
  } else if (keyText === "Escape") {
    displayValue = "";
    displayResult.textContent = displayValue;
  }
});

document.addEventListener("keyup", (event) => {
  keyText = event.key;
  if (
    keyText == "+" ||
    keyText == "-" ||
    keyText == "*" ||
    keyText == "/" ||
    keyText == "." ||
    (keyText < 10 && keyText >= 0)
  ) {
    for (item of buttons) {
      if (item.textContent === keyText) {
        item.style.background = "";
      }
    }
    equalBtn.style.background = "";
  }
});
