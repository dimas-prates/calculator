const IndexFunctions = {
  checkQuantityChar(char) {
    if (String(char).length > 11) {
      throw "Too big";
    }
  },
  doMath(text) {
    if (!text.trim()) {
      return "Try again";
    }
    try {
      text = text.replace("x", "*").replace("÷", "/").trim();
      text = eval(text);
      this.checkQuantityChar(text);
    } catch (error) {
      if (error == "Too big") {
        text = error;
        return;
      }
      text = "Try again";
    } finally {
      return text;
    }
  },
};

export default IndexFunctions;