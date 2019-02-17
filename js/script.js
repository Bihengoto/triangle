function triangle() {
  var inputOne = parseInt(document.getElementById("one").value);
  var inputTwo = parseInt(document.getElementById("two").value);
  var inputThree = parseInt(document.getElementById("three").value);

  if (
    inputOne + inputTwo > inputThree &&
    inputTwo + inputThree > inputOne &&
    inputOne + inputThree > inputTwo
  ) {
    if (
      inputOne == inputTwo &&
      inputTwo == inputThree &&
      inputThree == inputOne
    ) {
      alert("It is an equilateral triangle");
    } else if (
      inputOne == inputTwo ||
      inputTwo == inputThree ||
      inputThree == inputOne
    ) {
      alert("It is an isosceles triangle");
    }
    document.getElementById("myForm").reset();
  }
}
