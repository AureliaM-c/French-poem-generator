function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  let poemText = response.data.answer;

  // Typed.js works perfectly with HTML!
  new Typed("#poem", {
    strings: [poemText],
    typeSpeed: 50,
    showCursor: false,
    contentType: "html", // This is the magic - it renders HTML properly!
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector(".instruction");
  let userTopic = instructionInput.value;

  let poemElement = document.querySelector("#poem");

  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating" style="text-align: center; color: #885df8;">⌛ Generating a French poem about "${userTopic}"...</div>`;

  let apiKey = "dd09ob23ada50e374e3e4a89b5c9fte0";
  let prompt = `Generate a beautiful French poem about ${userTopic}`;
  let context =
    "You are a French poetry expert. Write elegant French poems with proper rhyme and rhythm. Your mission is to generate exactly 4 lines of French poetry about the given topic. Put each line on a separate line using <br> tags. End with <strong>SheCodes AI</strong> signature on a new line. Format: Line1<br>Line2<br>Line3<br>Line4<br><strong>SheCodes AI</strong>";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios
    .get(apiURL)
    .then(displayPoem)
    .catch(function (error) {
      console.log("Error:", error);
      poemElement.innerHTML =
        "Sorry, there was an error generating your poem. Please try again.";
      formElement.classList.remove("hidden");
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
