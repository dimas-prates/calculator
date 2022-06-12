import IndexFunctions from "./index.js";

const elementSpanResult = document.querySelector("[data-result]");
let resultField = elementSpanResult.innerHTML;

function clearInfo() {
  resultField = "";
  elementSpanResult.innerHTML = resultField.trim();
}
function insertChar(char) {
  resultField += char.trim();
  elementSpanResult.innerHTML = resultField.trim();
}
function eraseChar() {
  resultField = resultField.slice(0, resultField.length - 1).trim();
  elementSpanResult.innerHTML = resultField.trim();
}

function getResult() {
  resultField = IndexFunctions.doMath(resultField);
  elementSpanResult.innerHTML = String(resultField).trim();
}