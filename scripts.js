function multiply() {
  let multiply1 = document.querySelector("input#multiply1");
  let multiply2 = document.querySelector("input#multiply2");
  let result = document.querySelector("div.modal-body");

  if (multiply1.value == "" || multiply2.value == "") {
    result.innerHTML = "Woops...Seems like you forgot to type a number!";
  } else {
    let multiply1Value = Number(multiply1.value);
    let multiply2Value = Number(multiply2.value);
    result.innerHTML = "";

    let totalMultiply = `${multiply1Value} x ${multiply2Value} = ${multiply1Value *
      multiply2Value}`;

    result.innerHTML = totalMultiply;
  }
}
