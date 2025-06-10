function generatePoem(event) {
  event.preventDefault();

  document.querySelector("#poem").innerHTML = "";

  new Typewriter("#poem", {
    delay: 50,
    cursor: "",
  })
    .typeString("La tombe dit à la rose")
    .start();
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
