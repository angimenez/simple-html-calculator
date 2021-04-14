const onload = () => {
  const btns = document.querySelectorAll(".row span");
  const textbox = document.getElementById("textbox");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const buttonValue = btn.innerHTML;
      switch (buttonValue) {
        case "LIMPIAR":
          textbox.value = "0";
          break;
        case "BORRAR":
          if (textbox.value.length === 1) textbox.value = "0";
          else textbox.value = textbox.value.slice(0, -1);
          break;
        case "=":
          textbox.value = eval(textbox.value);
          break;
        default:
          if (textbox.value === "0") textbox.value = buttonValue;
          else textbox.value += buttonValue;
          break;
      }
    });
  });
};
