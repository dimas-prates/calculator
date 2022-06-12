import IndexFunctions from "./index.js";

const elementSpanResult = document.querySelector("[data-result]");

let resultField = elementSpanResult.innerHTML;

function clearInfo() {
  resultField = "";
  elementSpanResult.innerHTML = resultField.trim();
}
function insertChar(char) {
  resultField += char.trim();
  try {
    IndexFunctions.checkQuantityChar(resultField);
  } catch (error) {
    if (error == "Too big") {
      resultField = error;
      return;
    }
    resultField = "Try again";
  } finally {
    elementSpanResult.innerHTML = resultField.trim();
    return elementSpanResult.innerHTML;
  }
}
function eraseChar() {
  resultField = resultField.slice(0, resultField.length - 1).trim();
  elementSpanResult.innerHTML = resultField.trim();
}

function getResult() {
  resultField = IndexFunctions.doMath(resultField);
  elementSpanResult.innerHTML = String(resultField).trim();
}

for (let tagBtn of document.querySelectorAll(
  '[data-btn="sign"],[data-btn="digit"]'
)) {
  tagBtn.addEventListener("click", (err) => insertChar(tagBtn.innerHTML));
}

for (let tagBtn of document.querySelectorAll("[data-btn-function]")) {
  tagBtn.addEventListener("click", () => {
    switch (tagBtn.dataset.btnFunction) {
      case "clear":
        clearInfo();
        break;
      case "erase":
        eraseChar();
        break;
      case "calc":
        getResult();
        break;
    }
  });
}