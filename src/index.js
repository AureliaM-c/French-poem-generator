function displayPoem(response) {
  document.querySelector("#poem").innerHTML = "";

  let poemText = response.data.answer;

  new Typewriter("#poem", {
    delay: 50,
    cursor: "",
  })
    .typeString(poemText)
    .start();
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector(".instruction");
  let userTopic = instructionInput.value;

  let apiKey = "dd09ob23ada50e374e3e4a89b5c9fte0";
  let prompt = `Generate a beautiful French poem about ${userTopic}`;
  let context =
    "You are a French poetry expert. Write elegant French poems with proper rhyme and rhythm. Your mission is to generate aa 4 line-poem in basic HTML about the given topic. IMPORTANT: Each line must be on its own separate line. Use <br> tags to separate each line. End with <strong>SheCodes AI</strong> signature. Example format: Première ligne<br>Deuxième ligne<br>Troisième ligne<br>Quatrième ligne<br><strong>SheCodes AI</strong>.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  document.querySelector("#poem").innerHTML = "Generating your French poem...";

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
